"use strict";

const users = {
    id: ["qwer", "asdf", "zxcv"],
    password: ["123", "456", "789"]
}

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

        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(password === users.password[idx]) {
                return res.json({
                    id,
                    password,
                    success: true,
                    msg: "로그인 성공!"
                });
            } 
        }
        
        return res.json({
            id,
            password,
            success: false,
            msg: "아이디 및 비밀번호를 다시 확인해주세요."
        });
    }
}

export default {output, process};