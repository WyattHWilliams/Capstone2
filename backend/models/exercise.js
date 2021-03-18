"use strict";

// ----- [///// DEPENDENCIES /////] -----
const db = require('../db');
const { sqlForPartialUpdate } = require('../helpers/sql');
const { NotFoundError } = require('../expressError');


// ----- [///// CLASS /////] -----
class Exercise {
    /** CREATE EXERCISE
     *  {name, description} => {id, name, description}
    */
    static async create(data) {
        const result = await db.query(
            `INSERT INTO exercises (name,
                             description)
           VALUES ($1, $2)
           RETURNING id, name, description`,
            [
                data.name,
                data.description
            ]);
        let exercise = result.rows[0];

        return exercise;
    }

    /** FIND ALL EXERCISES
     *  search by name (includes case-sensitivity and partials) => [{id, name, description}, ...]
    */
    static async findAll({ name } = {}) {
        let query = `SELECT id,
                        name,
                        description
                 FROM exercises`;
        let whereExpressions = [];
        let queryValues = [];

        if (name !== undefined) {
            queryValues.push(`%${name}%`);
            whereExpressions.push(`name ILIKE $${queryValues.length}`);
        }

        // Finalize query and return results

        query += " ORDER BY name";
        const exercisesRes = await db.query(query, queryValues);
        return exercisesRes.rows;
    }

    /** GET BY EXERCISE ID
     *  {id} => {id, name, description}
     *  Errors:
     *      - NotFoundError if exercise not found
    */
    static async get(id) {
        const exerciseRes = await db.query(
            `SELECT id,
                  name,
                  description
           FROM exercises
           WHERE id = $1`,
            [id],
        );

        const exercise = exerciseRes.rows[0];

        if (!exercise) throw new NotFoundError(`No exercise: ${id}`);

        return exercise;
    }

    /** PARTIAL UPDATE
     *  id, ?{name, description} => {id, name, description}
     *  Errors:
     *      - NotFoundError if exercise id not found
    */
    static async update(id, data) {
        const { setCols, values } = sqlForPartialUpdate(
            data,
            {});
        const idVarIdx = "$" + (values.length + 1);

        const querySql = `UPDATE exercises 
                      SET ${setCols} 
                      WHERE id = ${idVarIdx} 
                      RETURNING id,
                                name,
                                description`;

        const result = await db.query(querySql, [...values, id]);
        const exercise = result.rows[0];

        if (!exercise) throw new NotFoundError(`No exercise: ${id}`);

        return exercise;
    }

    /** DELETE EXERCISE BY ID
     *  Errors:
     *      - NotFoundError if exercise id not found
    */
    static async remove(id) {
        const result = await db.query(
            `DELETE
           FROM exercises
           WHERE id = $1
           RETURNING id`, [id]);
        const exercise = result.rows[0];

        if (!exercise) throw new NotFoundError(`No exercise: ${id}`);
    }
}


// ----- [///// EXPORTS /////] -----
module.exports = Exercise;