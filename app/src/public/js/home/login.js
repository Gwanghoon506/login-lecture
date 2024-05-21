"use strict";

const loginForm = document.querySelector("#loginForm");
const loginId = document.querySelector("#id");
const loginPassword = document.querySelector("#password");
const loginButton = document.querySelector("#loginButton");

loginButton.addEventListener("click", () => {

    const req = {
        id: loginId.value,
        password: loginPassword.value
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = "/";
        } else {
            alert(res.msg);
        }
    }).catch((err) => console.log("로그인 중 에러발생!"));
});