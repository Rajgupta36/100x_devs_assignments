const { Admin, User, Course } = require('../db/index.js');
const jwt = require('jsonwebtoken');
const jwtpassword = '9302570431';
async function userMiddleware(req, res, next) {
    const data = req.headers['authorization'];

    if (!data) {
        res.status(400).json({ msg: "Authorization token is missing" });
    }
    if (!(data.split(' ')[0].toLowerCase().includes('bearer'))) {
        res.status(400).json({ msg: "invalid token" })

    } else {
        try {

            const token = data.split(' ')[1];
            console.log(token)
            const user = jwt.verify(token, jwtpassword);
            req.user = user.username;
            req.pass = user.password;
            console.log(req.user, req.pass);
            const founduser = await User.findOne({ username: req.user, password: req.pass });
            if (founduser.username === req.user) {
                console.log('done');
                next();
            }
            else {
                res.status(404).json({ err: 'invalid user token' });
            }
        }
        catch (err) {
            res.status(404).json({ err: 'internal server error' })
        }
    }

    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
}

module.exports = userMiddleware;