"use strict";

// ----- [///// DEPENDANCIES /////] -----
const { Client } = require("pg");
const { getDatabaseUri } = require("./config");


// ----- [///// MAIN /////] -----
const db = new Client({
    connectionString: getDatabaseUri(),
});

db.connect();


// ----- [///// EXPORTS /////] -----
module.exports = db;