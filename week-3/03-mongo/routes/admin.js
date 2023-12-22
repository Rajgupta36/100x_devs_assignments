const { Admin, User, Course } = require('../db/index.js');
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin.js");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {

    const newAdmin = {
        username: req.body.username,
        password: req.body.password
    }

    const admin = await Admin.findOne(newAdmin);
    if (admin) {
        res.status(401).json({ msg: 'user already exist' })
    }
    else {
        Admin.create(newAdmin);
        res.status(200).json({ msg: "Admin created succesfully" })
    }
    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, async (req, res) => {
    try {
        const courses = {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image
        }

        const newCourse = await Course.create(courses);
        res.json({ message: 'Course created successfully', courseId: newCourse._id });
    } catch (err) {
        res.status(404).json({ err: "internal error" })
    }


    // Implement course creation logic
});

router.get('/courses', adminMiddleware, async (req, res) => {
    try {
        const all = await Course.find();
        res.status(200).json(all)
    }
    catch (err) {
        res.status(400).json({ message: "courses not found" });
    }
    // Implement fetching all courses logic
});

module.exports = router;