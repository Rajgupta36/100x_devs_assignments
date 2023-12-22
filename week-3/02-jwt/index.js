const jwt = require('jsonwebtoken');
const { z } = require("zod");
const jwtPassword = 'secret';

const emailSchema = z.string().email({ msg: "username is not a valid email" });
const passwordSchema = z.string().length(6, { msg: "password does not meet the length requirement" })

/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
function signJwt(username, password) {
    const user = emailSchema.safeParse(username).data;
    const pass = passwordSchema.safeParse(password).data;
    if (!user) {

        return null;
    }
    if (!pass) {
        return null;
    }
    const token = jwt.sign({ username: user, password: pass }, jwtPassword);
    return token;
}


/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    try {
        const tokenVerification = jwt.verify(token, jwtPassword);
        return true;

    }
    catch (err) {
        return false;
    }
}


/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    try {
        const decodedObj = jwt.decode(token);
        if (decodedObj) {
            return true;
        }
        return false
    } catch (err) {
        return false;
    }
}

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword,
};
