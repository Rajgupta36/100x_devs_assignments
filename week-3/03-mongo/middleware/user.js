const { Admin, User, Course } = require('../db/index.js');
function userMiddleware(req, res, next) {
    const user = req.headers['username'];
    const pass = req.headers['password'];
    if (!user || !pass) {
        return res.status(401).json({ error: 'Username or password missing' });
    }
    try {
        User.findOne({ username: user, password: pass }).then((findUser) => {
            if (findUser?.username === user) {
                next();
            }
            else {
                return res.status(401).json({ msg: "user not found" })
            }
        });
    }
    catch (err) {
        return res.status(500).json({ err: 'Internal error' })

    }
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
}

module.exports = userMiddleware;