"use strict";

const hello = (req, res) => {
    res.render('../../views/home/index.ejs');
    // 
}

const login = (req, res) => {
    res.render('../../views/home/login.ejs');
}

export default {hello, login};