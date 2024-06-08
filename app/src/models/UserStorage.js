"use strict";

const fs = require('fs').promises;

class UserStorage {
    // user 앞에 #을 붙혀서 접근 제한을 public에서 private으로 변경
    // static #users = {
    //     id: ["qwer", "asdf"],
    //     password: ["1234", "5678"],
    //     name: ["a", "b", "c"],
    // };

    // 다른 파일에서 users에 접근할 수 있게 getter 생성
    // 파라미터의 갯수를 호출하는 쪽에서 지정할 수 있게하기 위해 ...을 사용
    static getUsers(...fields) {
        // const users = this.#users;
        // reduce를 사용하여 받아온 필드값을 순회하면서 users에 존재하는 것인지를 확인 후
        // 각 필드값을 newUsers에 넣어서 반환
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    // 아이디를 파라미터로 받아 해당된 인덱스를 찾고 users에서 해당 인덱스인 값들로 이루어진 객체를 반환
    static getUserInfo(id) {
        // const users = this.#users;
        return fs.readFile("../app/src/databases/users.json"
        // , (err, data) => {
        //     if(err) throw err;
        //     console.log(JSON.parse(data));
        //     // 읽은 파일의 data를 이진수로 출력
        //     // 문자 그대로 출력하려면 JSON.parse 메서드를 사용해야함
        // }
        ).then((data) => {
            return this.#getUserInfo(data, id);
        });
    }

    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUsers, info) => {
        newUsers[info] = users[info][idx];
            return newUsers;
        }, {});

        return userInfo;
    }

    static save(client) {
        // this.#users.id.push(client.id);
        // this.#users.password.push(client.password);
        // this.#users.name.push(client.name);
    }
}

module.exports = UserStorage;