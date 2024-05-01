"use strict";

import express from 'express';
const router = express.Router();

import ctrl from "./home.ctrl.js";

router.get("/", ctrl.hello);

router.get("/login", ctrl.login);

export default router;