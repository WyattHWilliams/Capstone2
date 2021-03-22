"use strict";

// ===== [///// DEPENDENCIES /////] =====
const db = require("../db");
const { sqlForPartialUpdate } = require("../helpers/sql");
const { NotFoundError, BadRequestError } = require("../expressError");


// ===== [///// MODEL /////] =====
class MealPlan {
    /** CREATE MEAL PLAN
     *  {username} => {username}
    */
    static async create({ username }) {
        const duplicateCheck = await db.query(
            `SELECT user_username AS username
           FROM meal_plans
           WHERE user_username = $1`,
            [username]);

        if (duplicateCheck.rows[0])
            throw new BadRequestError(`Duplicate meal plan: ${username}`);

        const result = await db.query(
            `INSERT INTO meal_plans
           (user_username)
           VALUES ($1, $2, $3, $4)
           RETURNING user_username AS username`,
            [username],
        );
        const mealPlan = result.rows[0];

        return mealPlan;
    }

    /** GET BY USERNAME
     *  {username} => {username, ...}
     *  Errors:
     *      - NotFoundError if meal_plan not found
    */
    static async get(username) {
        const result = await db.query(
            `SELECT monday,
                  tuesday,
                  wednesday,
                  thursday,
                  friday,
                  saturday,
                  sunday
           FROM meal_plans
           WHERE user_username = $1`,
            [username]);

        const mealPlan = result.rows[0];

        if (!mealPlan) throw new NotFoundError(`No meal plan: ${username}`);

        return mealPlan;
    }

    /** PARTIAL UPDATE
     *  username, ?{monday, tuesday, ...} => {username, monday, tuesday, ...}
     *  Errors:
     *      - NotFoundError if username not found
    */
    static async update(username, data) {
        const { setCols, values } = sqlForPartialUpdate(
            data,
            {
                username: "user_username",
                monday: "monday",
                tuesday: "tuesday",
                wednesday: "wednesday",
                thursday: "thursday",
                friday: "friday",
                saturday: "saturday",
                sunday: "sunday"
            });
        const usernameVarIdx = "$" + (values.length + 1);

        const querySql = `UPDATE meal_plans 
                      SET ${setCols} 
                      WHERE user_username = ${usernameVarIdx} 
                      RETURNING monday, 
                                tuesday, 
                                wednesday,
                                thursday,
                                friday,
                                saturday,
                                sunday`;
        const result = await db.query(querySql, [...values, username]);
        const mealPlan = result.rows[0];

        if (!mealPlan) throw new NotFoundError(`No meal plan: ${username}`);

        return mealPlan;
    }

    // delete => undefined
    static async remove(username) {
        const result = await db.query(
            `DELETE
           FROM meal_plans
           WHERE user_username = $1
           RETURNING user_username AS username`,
            [username]);
        const mealPlan = result.rows[0];

        if (!mealPlan) throw new NotFoundError(`No meal plan: ${username}`);
    }
}


// ----- [///// EXPORTS /////] -----
module.exports = MealPlan;