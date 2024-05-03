"use strict";

import express from 'express';
const router = express.Router();

import ctrl from "./home.ctrl.js";

router.get("/", ctrl.output.hello);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

export default router;