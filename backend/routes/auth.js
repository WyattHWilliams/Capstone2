"use strict";

// ----- [///// DEPENDENCIES /////] -----
const express = require('express');
const router = new express.Router();
const User = require('..models/user');

const { createToken } = require('..helpers/tokens');
const { BadRequestError } = require('../expressError');

const userAuthSchema = require('../schemas/userAuth.json');
const userRegisterSchema = require('../schemas/userRegister.json');


// ----- [///// ROUTES /////] -----
/** POST /auth/token: {username, password} => {token} */
router.post('/token', async function (req, res, next) {
    try {
        const validator = jsonschema.validate(req.body, userAuthSchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }

        const { username, password } = req.body;
        const user = await User.authenticate(username, password);
        const token = createToken(user);
        return res.json({ token });
    } catch (err) {
        return next(err);
    }
})

/** POST /auth/register: {user} => {token} */
router.post('/register', async function (req, res, next) {
    try {
        const validator = jsonschema.validate(req.body, userRegisterSchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }

        const newUser = await User.register({ ...req.body, isAdmin: false });
        const token = createToken(newUser);
        return res.status(201).json({ token });
    } catch (err) {
        return next(err);
    }
})