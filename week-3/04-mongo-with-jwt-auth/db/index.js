const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://raj96yt:******@cluster1.bai2htg.mongodb.net/newuser');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String,
    authenticationToken: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    authenticationToken: String,
    purchasedCourse: Array
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    image: String
});
const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}