"use strict";

// ----- [///// DEPENDENCIES /////] -----
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const { UnauthorizedError } = require("../expressError");


// ----- [///// MIDDLEWARE /////] -----
/** AUTHENTICATE USER */
function authenticateJWT(req, res, next) {
    try {
        const authHeader = req.headers && req.headers.authorization;
        if (authHeader) {
            const token = authHeader.replace(/^[Bb]earer /, "").trim();
            res.locals.user = jwt.verify(token, SECRET_KEY);
        }
        return next();
    } catch (err) {
        return next();
    }
}

/** CHECK IF USER IS LOGGED IN
 *  Errors:
 *      - UnauthorizedError if user not logged in.
*/
function ensureLoggedIn(req, res, next) {
    try {
        if (!res.locals.user) throw new UnauthorizedError();
        return next();
    } catch (err) {
        return next(err);
    }
}

/** CHECK IF USER IS ADMIN
 *  Errors:
 *      - Unauthorized if user not admin
*/
function ensureAdmin(req, res, next) {
    try {
        if (!res.locals.user || !res.locals.user.isAdmin) {
            throw new UnauthorizedError();
        }
        return next();
    } catch (err) {
        return next(err);
    }
}

/** CHECK IF ADMIN OR, IF NOT, IF USER MATCHES USERNAME PARAM
 *  Errors:
 *      - Unauthorized if not admin and not matching username param
*/
function ensureCorrectUserOrAdmin(req, res, next) {
    try {
        const user = res.locals.user;
        if (!(user && (user.isAdmin || user.username === req.params.username))) {
            throw new UnauthorizedError();
        }
        return next();
    } catch (err) {
        return next(err);
    }
}


// ----- [///// EXPORTS /////] -----
module.exports = {
    authenticateJWT,
    ensureLoggedIn,
    ensureAdmin,
    ensureCorrectUserOrAdmin,
};