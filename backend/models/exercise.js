"use strict";

// ----- [///// DEPENDENCIES /////] -----
const db = require('../db');
const { sqlForPartialUpdate } = require('../helpers/sql');
const { NotFoundError } = require('../expressError');

const bodyObj = {
    "Upper Body": ['Shoulders', 'Upper Arm'],
    "Core": ['Back', 'Chest', 'Waist'],
    "Lower Body": ['Hips', 'Thighs', 'Calves'],
    "Full Body": ["Cardio"]
}
const muscleObj = {
    "Shoulders": ['Deltoid, Anterior', 'Deltoid, Lateral', 'Deltoid, Posterior'],
    "Upper Arm": ['Triceps', 'Biceps'],
    "Back": ['Infraspinatus', 'Trapezius, Upper', 'Back, General'],
    "Chest": ['Pectoralis Major, Sternal', 'Pectoralis Major, Clavicular', 'Serratus Anterior'],
    "Waist": ['Erector Spinae', 'Obliques', 'Rectus Abdominis'],
    "Hips": ['Iliopsoas', 'Hip Abductors', 'Gluteus Maximus'],
    "Thighs": ['Obliques', 'Hamstrings', 'Quadriceps'],
    "Calves": ['Gastrocnemius', 'Tibialis Anterior'],
    "Cardio": ['Cardio']
}

// ----- [///// CLASS /////] -----
class Exercise {

    static async generateWorkout(generalLocation) {
        function shuffleArray(arr) {
            return arr.sort(() => Math.random() - 0.5);
        }
        let data = [];
        for (let location of bodyObj[generalLocation]) {
            for (let muscle of muscleObj[location]) {
                let res = await db.query(
                    `SELECT
                        id,
                        name,
                        description,
                        muscle,
                        general_location AS generalLocation,
                        specific_location AS specificLocation
                    FROM exercises
                    WHERE general_location = $1 AND specific_location = $2 AND muscle = $3`,
                    [
                        generalLocation,
                        location,
                        muscle
                    ]
                )
                let exercises = res.rows;
                let exerArr = shuffleArray(exercises);
                data.push(exerArr[0]);
            }
        }
        return data;
    }

    /** CREATE EXERCISE
     *  {name, description} => {id, name, description}
    */
    static async create(data) {
        const result = await db.query(
            `INSERT INTO exercises (name,
                             description,
                             muscle,
                             general_location AS generalLocation,
                             specific_location AS specificLocation
                             )
           VALUES ($1, $2, $3, $4, $5)
           RETURNING id, name, description`,
            [
                data.name,
                data.description,
                data.muscle,
                data.generalLocation,
                data.specificLocation
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