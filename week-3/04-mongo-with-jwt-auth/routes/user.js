const { Admin, User, Course } = require('../db/index.js');
const { Router } = require("express");
const jwt = require('jsonwebtoken');
const router = Router();
const userMiddleware = require("../middleware/user");
const jwtpassword = '9302570431';

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const newUser = {
        username: req.body.username,
        password: req.body.password
    }
    const user = await User.findOne(newUser);
    if (user) {
        res.status(401).json({ msg: 'user already exist' })
    }
    else {
        User.create(newUser);
        res.status(200).json({ msg: "User created succesfully" });
    }
});

router.post('/signin', (req, res) => {
    const user = req.body.username;
    const pass = req.body.password;
    if (!user || !pass) {
        return res.status(401).json({ error: 'Username or password missing' });
    }
    try {

        User.findOne({ username: user, password: pass }).then((findUser) => {
            if (findUser?.username === user) {
                const token = jwt.sign({ username: user, password: pass }, jwtpassword);
                findUser.authenticationToken = token;
                findUser.save();
                console.log(findUser.authenticationToken);
                res.status(200).json({ yourtoken: findUser.authenticationToken })
            }
            else {
                res.status(401).json({ msg: "user not found" })
            }
        })
    }
    catch (err) {
        res.status(500).json({ err: 'Internal error' })
    }

});

router.get('/courses', async (req, res) => {
    try {
        const all = await Course.find();
        res.status(200).json(all)
    } catch (err) {
        res.status(400).json({ message: "courses not found" });
    }
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    const user = req.user;
    const id = req.params.courseId;

    Course.findById(id).then((course) => {
        if (course) {
            User.findOne({ username: user }).then((user) => {
                user.purchasedCourse.push(course);
                user.save();
                res.status(200).json({ messgae: 'course purchased succssfully' })
            })
                .catch((err) => {
                    return res.status(500).json({ err: 'Internal server error while finding user' });
                });
        }
        else {
            res.status(401).json({ message: "course not found" })
        }
    }).catch((courseErr) => {
        return res.status(500).json({ err: 'Internal server error while finding course' });
    });


});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const user = req.user;
    try {
        const foundUser = await User.findOne({ username: user });
        if (!foundUser.purchasedCourse.length) {
            res.status(401).json({ msg: "no course found" });
        }

        res.status(200).json({ purchasedCourse: foundUser.purchasedCourse });
    }
    catch (err) {
        res.status(404).json({ err: "internal server error" })
    }
});

module.exports = router;