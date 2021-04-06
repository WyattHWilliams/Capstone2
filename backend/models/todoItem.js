"use strict";

// ===== [///// DEPENDENCIES /////] =====
const db = require("../db");
const { sqlForPartialUpdate } = require("../helpers/sql");
const { NotFoundError, BadRequestError } = require("../expressError");


// ===== [///// MODEL /////] =====
class TodoItem {
    static async create(itemData) {
        const result = await db.query(
            `INSERT INTO todo_items (user_username,
                             day_index,
                             type,
                             name,
                             desc,
                             detail
                             )
           VALUES ($1, $2, $3, $4, $5, $6)
           RETURNING id`,
            [
                itemData.username,
                itemData.dayIndex,
                itemData.type,
                itemData.name,
                itemData.desc,
                JSON.stringify(itemData.detail),
            ]);
        let todoItem = result.rows[0];

        return todoItem;
    }

    static async getTodoItemList(username) {
        let res = await db.query(
            `SELECT 
                id,
                user_username AS username,
                day_index AS dayIndex,
                time_index AS timeIndex,
                type,
                name,
                desc,
                detail
            FROM todo_items
            WHERE user_username = $1
            ORDER BY day_index`,
            [username]);

        let list = res.rows[0];
        list.map(item => {
            item.detail = JSON.parse(item.detail);
        })
        return list;
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
}