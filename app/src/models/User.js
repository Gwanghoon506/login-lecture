"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const client = this.body;
        const {id, password} = UserStorage.getUserInfo(client.id);
        const result = {};
        if(id) {
            if (id === client.id && password === client.password) {
                result.success = true;
                result.msg = "로그인 성공";
            } else {
                result.success = false; 
                result.msg = "비밀번호가 틀렸습니다.";
            }
        } else {
            result.success = false
            result.msg = "존재하지 않는 아이디입니다.";
        }
        return result;
    }

    register() {
        const client = this.body;
        UserStorage.save(client);
        const result = {};
        result.success = true;
        result.msg = "회원가입 성공!";
        return result;
    }
}

module.exports = User;