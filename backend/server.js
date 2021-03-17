"use strict";

// ----- [///// DEPENDANCIES /////] -----
const app = require("./app");
const { PORT } = require("./config");


// ----- [///// INITIALIZE SERVER /////] -----
app.listen(PORT, function () {
    console.log(`Started on http://localhost:${PORT}`);
});