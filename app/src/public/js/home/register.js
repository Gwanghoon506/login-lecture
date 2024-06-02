"use strict";

const registerForm = document.querySelector("#form");
const registerId = document.querySelector("#id");
const registerName = document.querySelector("#name")
const registerPassword = document.querySelector("#password");
const registerConfimPassword = document.querySelector("#confirm-password");
const signUpButton = document.querySelector("#signUpButton");

    function register() {
        
    }

signUpButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    if(!registerId.value || !registerName.value || !registerPassword.value || !registerConfimPassword.value )
        alert("비어있는 칸이 있습니다.");
    if(registerPassword.value !== registerConfimPassword.value)
        alert("비밀번호가 서로 일치하지 않습니다.");

    const req = {
        id: registerId.value,
        name: registerName.value,
        password: registerPassword.value
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = "/login";
        } else {
            alert(res.msg);
        }
    }).catch((err) => console.log("회원가입 중 에러발생!"));
});