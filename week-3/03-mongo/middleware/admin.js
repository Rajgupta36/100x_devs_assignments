// Middleware for handling auth
const { Admin, User, Course } = require('../db/index.js');

function adminMiddleware(req, res, next) {
    const admin = req.headers['username'];
    const pass = req.headers['password'];
    if (!admin || !pass) {
        return res.status(401).json({ error: 'Username or password missing' });
    }
    try {

        Admin.findOne({ username: admin, password: pass }).then((findAdmin) => {
            if (findAdmin?.username === admin) {
                next();
            }
            else {
                return res.status(401).json({ msg: "user not found" })
            }
        })
    }
    catch (err) {
        return res.status(500).json({ err: 'Internal error' })
    }

    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}


module.exports = adminMiddleware;