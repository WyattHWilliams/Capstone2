"use strict";

// ----- [///// DEPENDENCIES /////] -----
const express = require('express');
const router = new express.Router();
const jsonschema = require("jsonschema");
const TodoItem = require('../models/todoItem');

const { ensureAdmin, ensureLoggedIn, ensureCorrectUserOrAdmin } = require("../middleware/auth");
const { BadRequestError } = require("../expressError");


// ----- [///// ROUTES /////] -----
/** POST /todo-items/single-todo/: {todo} => {todo}
 *  ADMIN or CORRECT_USER
*/
router.post('/single-todo/:username', ensureCorrectUserOrAdmin, async function (req, res, next) {
    try {
        // const validator = jsonschema.validate(req.body, exerciseNewSchema);
        // if (!validator.valid) {
        //     const errs = validator.errors.map(e => e.stack);
        //     throw new BadRequestError(errs);
        // }

        const todoItem = await TodoItem.create(req.body);
        return res.status(201).json({ todoItem });
    } catch (err) {
        return next(err);
    }
})

/** POST /todo-items/multiple-todo/: {list} => {list}
 *  ADMIN or CORRECT_USER
*/
router.post('/multiple-todo/:username', ensureCorrectUserOrAdmin, async function (req, res, next) {
    try {
        let todoItemList = [];
        for (let item of req.body) {
            const todoItem = await TodoItem.create(item);
            todoItemList.push(todoItem);
        }
        return res.status(201).json({ todoItemList });
    } catch (err) {
        return next(err);
    }
})

/** GET /todo-items/[username]: => {todoItemList}
 *  ADMIN or CORRECT_USER
 * 
 *  ensureCorrectUserOrAdmin,
*/
router.get('/:username', async function (req, res, next) {
    try {
        const todoItemList = await TodoItem.getTodoItemList(req.params.username);
        return res.json({ todoItemList });
    } catch (err) {
        return next(err);
    }
});

/** PATCH /todo-items/update-multiple-todo/[username]: ?{monday, tuesday, ...} => {mealPlan}
 *  ADMIN or CORRECT_USER
*/
router.patch('/update-multiple-todo/:username', ensureCorrectUserOrAdmin, async function (req, res, next) {
    try {
        let todoItemList = [];
        for (let item of req.body) {
            item.detail = JSON.stringify(item.detail)
            const todoItem = await TodoItem.updateTodoItem(item.id, item);
            todoItemList.push(todoItem);
        }
        return res.status(201).json({ todoItemList });
    } catch (err) {
        return next(err);
    }
})


router.delete('/delete-meals/:username', ensureCorrectUserOrAdmin, async function (req, res, next) {
    try {
        await TodoItem.removeMealPlan(req.params.username);
        return res.json({ deletedPlanFor: +req.params.username });
    } catch (err) {
        return next(err);
    }
});

router.delete('/delete-workouts/:username', ensureCorrectUserOrAdmin, async function (req, res, next) {
    try {
        await TodoItem.removeWorkoutPlan(req.params.username);
        return res.json({ deletedPlanFor: +req.params.username });
    } catch (err) {
        return next(err);
    }
});


// ----- [///// EXPORTS /////] -----
module.exports = router;