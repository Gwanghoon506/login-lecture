"use strict";

// 모듈
import express from "express";
import cors from "cors";
import path, {dirname} from 'path';
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(cors());

// 모듈
import home from "./src/routes/home/index.js";
// ./src/routes/home/index.js

// 앱 세팅
app.set("views", "./app/src/views");
app.set("view engine", "ejs");
app.use('/js', express.static(path.join(__dirname, '/src/public/js')));

// use -> 미들 웨어를 등록해주는 메서드
app.use("/", home);

export default app;