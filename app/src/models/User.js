"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const {id, password} = UserStorage.getUserInfo(this.body.id);
        const result = {};
        if(id) {
            if (id === this.body.id && password === this.body.password) {
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
}

module.exports = User;