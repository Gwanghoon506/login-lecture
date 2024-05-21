"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
    hello: (req, res) => {
        res.render('home/index');
    },
    login: (req, res) => {
        res.render('home/login');
    }
}

const process = {
    login: (req, res) => {
        const id = req.body.id;
        const password = req.body.password;

        const users = UserStorage.getUsers("id", "password");
        console.log(users);
        
        const response = {};
        response.id = id;
        response.password = password;

        // if(users.id.includes(id)) {
        //     const idx = users.id.indexOf(id);
        //     if(password === users.password[idx]) {
        //         response.success = true;
        //         response.msg = "로그인 성공!";
        //         return res.json(response);
        //     } 
        // }

        response.success = false;
        response.msg = "아이디 및 비밀번호를 다시 확인해주세요.";
        
        return res.json(response);
    }
}

module.exports = {output, process};