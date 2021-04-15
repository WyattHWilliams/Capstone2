"use strict";

// ===== [///// DEPENDENCIES /////] =====
const db = require("../db");
const { sqlForPartialUpdate } = require("../helpers/sql");
const { NotFoundError, BadRequestError } = require("../expressError");


// ===== [///// MODEL /////] =====
class TodoItem {
    static async create(itemData) {
        try {
            let detail = JSON.stringify(itemData.detail)
            console.log(itemData);
            const result = await db.query(
                `INSERT INTO todo_items
                            (user_username,
                             day_index,
                             type,
                             name,
                             description,
                             detail
                             )
                VALUES ($1, $2, $3, $4, $5, $6)
                RETURNING id,
                        user_username AS "username",
                        day_index AS "dayIndex",
                        time_index AS "timeIndex",
                        type,
                        name,
                        description AS "desc",
                        detail`,
                [
                    itemData.username,
                    itemData.dayIndex,
                    itemData.type,
                    itemData.name,
                    itemData.desc,
                    detail
                ]);
            let todoItem = result.rows[0];

            return todoItem;
        } catch (err) {
            // console.log(err.stack);

        }
    }

    static async getTodoItemList(username) {
        let res = await db.query(
            `SELECT 
                id,
                user_username AS "username",
                day_index AS "dayIndex",
                time_index AS "timeIndex",
                type,
                name,
                description AS "desc",
                detail
            FROM todo_items
            WHERE user_username = $1
            ORDER BY day_index`,
            [username]);

        let list = res.rows;
        list.map(item => {
            item.detail = JSON.parse(item.detail);
        })
        return list;
    }

    static async updateTodoItem(id, data) {
        const { setCols, values } = sqlForPartialUpdate(
            data,
            {
                username: "user_username",
                dayIndex: "day_index",
                timeIndex: "time_index",
                desc: "description"
            });
        const idVarIdx = "$" + (values.length + 1);

        const querySql = `UPDATE todo_items 
                      SET ${setCols} 
                      WHERE id = ${idVarIdx} 
                      RETURNING id, 
                                user_username AS "username", 
                                day_index AS "dayIndex",
                                time_index AS "timeIndex",
                                type,
                                name,
                                description AS "desc",
                                detail`;
        const res = await db.query(querySql, [...values, id]);
        let todoItem = res.rows[0];
        todoItem.detail = JSON.parse(todoItem.detail);
        return todoItem;
    }

    static async remove(id) {
        const result = await db.query(
            `DELETE
           FROM todo_items
           WHERE id = $1
           RETURNING id`, [id]);
        const todoItem = result.rows[0];

        if (!todoItem) throw new NotFoundError(`No todoItem: ${id}`);
    }

    static async removeMealPlan(username) {
        const result = await db.query(
            `DELETE
           FROM todo_items
           WHERE user_username = $1 AND type = $2
           RETURNING user_username AS "username"`,
            [
                username,
                'meal'
            ]);
        const todoItem = result.rows[0];

        if (!todoItem) throw new NotFoundError(`No meals: ${username}`);
    }

    static async removeWorkoutPlan(username) {
        const result = await db.query(
            `DELETE
           FROM todo_items
           WHERE user_username = $1 AND type = $2
           RETURNING user_username AS "username"`,
            [
                username,
                'workout'
            ]);
        const todoItem = result.rows[0];

        if (!todoItem) throw new NotFoundError(`No workouts: ${username}`);
    }
}


// ===== [///// EXPORTS /////] =====
module.exports = TodoItem;