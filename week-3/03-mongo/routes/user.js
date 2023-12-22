const { Admin, User, Course } = require('../db/index.js');
const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user.js");

// User Routes


router.post('/signup', async (req, res) => {
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
    // Implement admin signup logic
});


router.get('/courses', async (req, res) => {
    try {
        const allcourses = await Course.find();
        if (allcourses.length) {
            console.log("yes");
            res.status(200).json(allcourses);
        }
        else {
            res.status(400).json({ message: "courses not found" })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Internal server eror" })
    }
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    const id = req.params.courseId;
    try {
        Course.findById(id).then((course) => {
            if (course) {
                const user = req.headers['username'];
                User.findOne({ username: user }).then((user) => {
                    user.purchasedCourse.push(course);
                    user.save();
                    res.status(200).json({ messgae: 'course purchased succssfully' })
                })
            }
            else {
                res.status(401).json({ message: "course not found" })
            }
        })
    } catch (err) {
        res.status(500).json({ err: 'internal server error' })
    }
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    try {
        const user = req.headers["username"];
        User.findOne({ username: user }).then((user) => {
            if (user.purchasedCourse) {
                res.status(200).json(user.purchasedCourse);
            }
            else {
                res.status(200).json({ message: 'no course found' });
            }
        })
    }
    catch (err) {
        res.status(500).json({ err: 'Internal server error' });
    }

});

module.exports = router;