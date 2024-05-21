"use strict";

class UserStorage {
    // user 앞에 #을 붙혀서 접근 제한을 public에서 private으로 변경
    static #users = {
        id: ["qwer", "asdf"],
        password: ["1234", "5678"],
        name: ["a", "b", "c"],
    };

    // 다른 파일에서 users에 접근할 수 있게 getter 생성
    // 파라미터의 갯수를 호출하는 쪽에서 지정할 수 있게하기 위해 ...을 사용
    static getUsers(...fields) {
        const users = this.#users;
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
}

module.exports = UserStorage;