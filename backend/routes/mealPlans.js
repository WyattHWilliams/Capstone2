"use strict";

// ----- [///// DEPENDENCIES /////] -----
const express = require('express');
const router = new express.Router();
const jsonschema = require("jsonschema");
const MealPlan = require('../models/mealPlan');

const { ensureAdmin, ensureLoggedIn, ensureCorrectUserOrAdmin } = require("../middleware/auth");
const { BadRequestError } = require("../expressError");

const mealPlanNewSchema = require("../schemas/mealPlanNew.json");
const mealPlanUpdateSchema = require("../schemas/mealPlanUpdate.json");


// ----- [///// ROUTES /////] -----
/** POST /meal-plans/: {username} => {mealPlan}
*/
router.post('/', ensureLoggedIn, async function (req, res, next) {
    try {
        const validator = jsonschema.validate(req.body, mealPlanNewSchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }

        const mealPlan = await MealPlan.create(req.body);
        return res.status(201).json({ mealPlan });
    } catch (err) {
        return next(err);
    }
})


/** GET /meal-plans/[mealPlanUsername]: => {mealPlan}
 *  ADMIN or CORRECT_USER
 * 
 * ensureCorrectUserOrAdmin,
*/
router.get('/:username', async function (req, res, next) {
    try {
        const mealPlan = await MealPlan.get(req.params.username);
        return res.json({ mealPlan });
    } catch (err) {
        return next(err);
    }
});

/** PATCH /meal-plans/[mealPlanUsername]: ?{monday, tuesday, ...} => {mealPlan}
 *  ADMIN or CORRECT_USER
 *  NOTE: days must contain jsonStringified meal objects.
*/
router.patch("/:username", ensureCorrectUserOrAdmin, async function (req, res, next) {
    try {
        const validator = jsonschema.validate(req.body, mealPlanUpdateSchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }

        const mealPlan = await MealPlan.update(req.params.username, req.body);
        return res.json({ mealPlan });
    } catch (err) {
        return next(err);
    }
});

/** DELETE /meal-plans/[mealPlanUsername]: => {deletedPlanFor: username}
 *  ADMIN_ONLY
*/
router.delete('/:username', ensureAdmin, async function (req, res, next) {
    try {
        await MealPlan.remove(req.params.username);
        return res.json({ deletedPlanFor: +req.params.username });
    } catch (err) {
        return next(err);
    }
});


// ----- [///// EXPORTS /////] -----
module.exports = router;