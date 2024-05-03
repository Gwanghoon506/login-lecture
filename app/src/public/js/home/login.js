"use strict";

const loginForm = document.querySelector("#loginForm");
const loginId = document.querySelector("#id");
const loginPassword = document.querySelector("#password");
const loginButton = document.querySelector("#loginButton");

console.log(id);

loginButton.addEventListener("click", () => {

    const req = {
        id: loginId.value,
        password: loginPassword.value
    }
    console.log(req.id);

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    }).
});