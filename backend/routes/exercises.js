"use strict";

// ----- [///// DEPENDENCIES /////] -----
const express = require('express');
const router = new express.Router();
const jsonschema = require("jsonschema");
const Exercise = require('../models/exercise');

const { ensureAdmin } = require("../middleware/auth");
const { BadRequestError } = require("../expressError");

const exerciseNewSchema = require("../schemas/exerciseNew.json");
const exerciseUpdateSchema = require("../schemas/exerciseUpdate.json");
const exerciseSearchSchema = require("../schemas/exerciseSearch.json");


// ----- [///// ROUTES /////] -----
/** POST /exercises/: {exercise} => {exercise}
 *  ADMIN_ONLY
*/
router.post('/', ensureAdmin, async function (req, res, next) {
    try {
        const validator = jsonschema.validate(req.body, exerciseNewSchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }

        const exercise = await Exercise.create(req.body);
        return res.status(201).json({ exercise });
    } catch (err) {
        return next(err);
    }
})

/** GET /exercises/: => {exercises: [{id, name, description}, ...]} */
router.get('/', async function (req, res, next) {
    const q = req.query;

    try {
        const validator = jsonschema.validate(q, exerciseSearchSchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }

        const exercises = await Exercise.findAll(q);
        return res.json({ exercises });
    } catch (err) {
        return next(err);
    }
});

/** GET /exercises/[exerciseId]: => {exercise} */
router.get('/:id', async function (req, res, next) {
    try {
        const exercise = await Exercise.get(req.params.id);
        return res.json({ exercise });
    } catch (err) {
        return next(err);
    }
});

/** PATCH /exercises/[exerciseId]: ?{name, description} => {exercise}
 *  ADMIN_ONLY
*/
router.patch("/:id", ensureAdmin, async function (req, res, next) {
    try {
        const validator = jsonschema.validate(req.body, exerciseUpdateSchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }

        const exercise = await Exercise.update(req.params.id, req.body);
        return res.json({ exercise });
    } catch (err) {
        return next(err);
    }
});

/** DELETE /exercises/[exerciseId]: => {deleted: id}
 *  ADMIN_ONLY
*/
router.delete('/:id', ensureAdmin, async function (req, res, next) {
    try {
        await Exercise.remove(req.params.id);
        return res.json({ deleted: +req.params.id });
    } catch (err) {
        return next(err);
    }
});


// ----- [///// EXPORTS /////] -----
module.exports = router;