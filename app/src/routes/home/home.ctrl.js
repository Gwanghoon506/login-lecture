"use strict";

const hello = (req, res) => {
    res.render('home/index');
}

const login = (req, res) => {
    res.render('home/login');
}

export default {hello, login};