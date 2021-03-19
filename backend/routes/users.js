"use strict";

// ----- [///// DEPENDENCIES /////] -----
const express = require('express');
const router = new express.Router();
const jsonschema = require("jsonschema");
const User = require('../models/user');

const { ensureCorrectUserOrAdmin, ensureAdmin } = require("../middleware/auth");
const { createToken } = require('../helpers/tokens');
const { BadRequestError } = require('../expressError');

const userNewSchema = require("../schemas/userNew.json");
const userUpdateSchema = require("../schemas/userUpdate.json");


// ----- [///// ROUTES /////] -----
/** POST /users/: {user} => {user, token} 
 *  ADMIN_ONLY
*/
router.post('/', ensureAdmin, async function (req, res, next) {
    try {
        const validator = jsonschema.validate(req.body, userNewSchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }

        const user = await User.register(req.body);
        const token = createToken(user);
        return res.status(201).json({ user, token });
    } catch (err) {
        return next(err);
    }
})

/** GET /users/: => {users: [{username, spoonacularHash, firstName, lastName, email}, ...]}
 *  ADMIN_ONLY
*/
router.get('/', ensureAdmin, async function (req, res, next) {
    try {
        const users = await User.findAll();
        return res.json({ users });
    } catch (err) {
        return next(err);
    }
})

/** GET /users/[username]: => {user: {username, spoonacluarHash, firstName, lastName, isAdmin, email, calendarData: {...}}}
 *  ADMIN or CORRECT_USER
*/
router.get('/:username', ensureCorrectUserOrAdmin, async function (req, res, next) {
    try {
        const user = await User.get(req.params.username);
        return res.json({ user });
    } catch (err) {
        return next(err);
    }
})

/** PATCH /users/[username]: {user} => {user}
 *  ADMIN or CORRECT_USER
*/
router.patch('/:username', ensureCorrectUserOrAdmin, async function (req, res, next) {
    try {
        const validator = jsonschema.validate(req.body, userUpdateSchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }

        const user = await User.update(req.params.username, req.body);
        return res.json({ user });
    } catch (err) {
        return next(err);
    }
});

/** DELETE /users/[username]: => {deleted: username}
 * ADMIN or CORRECT_USER
*/
router.delete('/:username', ensureCorrectUserOrAdmin, async function (req, res, next) {
    try {
        await User.remove(req.params.username);
        return res.json({ deleted: req.params.username });
    } catch (err) {
        return next(err);
    }
});


// ----- [///// EXPORTS /////] -----
module.exports = router;