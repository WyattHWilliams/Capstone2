"use strict";

// ----- [///// DEPENDANCIES /////] -----
require('dotenv').config();
require('colors');


// ----- [///// CONFIG /////] -----
/** Secret Key Stuff */
const SECRET_KEY = process.env.SECRET_KEY || "secret-dev-key";

/** Pg Database Info */
process.env.PGHOST = 'localhost';
process.env.PGUSER = 'postgres';
process.env.PGPASSWORD = 'hello';
process.env.PGPORT = 5433;

const PORT = +process.env.PORT || 3001;


// ----- [///// MAIN /////] -----
/** Set Database Uri */
function getDatabaseUri() {
    return (process.env.NODE_ENV === "test")
        ? "disciple_test"
        : process.env.DATABASE_URL || "disciple";
}

/** bCrypt Security */
const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;


// ----- [///// LOGGING /////] -----
console.log("Jobly Config:".green);
console.log("SECRET_KEY:".yellow, SECRET_KEY);
console.log("PORT:".yellow, PORT.toString());
console.log("BCRYPT_WORK_FACTOR".yellow, BCRYPT_WORK_FACTOR);
console.log("Database:".yellow, getDatabaseUri());
console.log("---");


// ----- [///// EXPORTS /////] -----
module.exports = {
    SECRET_KEY,
    PORT,
    BCRYPT_WORK_FACTOR,
    getDatabaseUri,
};