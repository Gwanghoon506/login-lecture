"use strict";

// 모듈
import express from "express";
import cors from "cors";

const app = express();

// 모듈
import home from "./src/routes/home/index.js";
// ./src/routes/home/index.js

// 앱 세팅
app.set("views", "./app/src/views");
app.set("view engine", "ejs");

// use -> 미들 웨어를 등록해주는 메서드
app.use("/", home);

export default app;