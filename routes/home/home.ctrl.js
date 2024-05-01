"use strict";

const hello = (req, res) => {
    res.render('./home/index');
    // ../../views/home/index.ejs
}

const login = (req, res) => {
    res.render('./home/login');
}

export default {hello, login};