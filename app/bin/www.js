"use strict";

const PORT = 3000;
const app = require("../app");
// const app = require("../app").default;

app.listen(PORT, () => console.log("서버 가동"));