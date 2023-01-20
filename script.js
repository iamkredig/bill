let ScreenWidth = window.innerWidth
let ScreenLengh = window.innerHeight

function Setpadding () {document.documentElement.style.setProperty('--padding', window.innerHeight / 100 * 7 + "px");}

if (ScreenWidth >= 700) {
    window.addEventListener("resize", e=> { Setpadding();
    });
    Setpadding();
}

PasswordInputField = document.querySelector("#password-input")
body = document.querySelector("body")
welcome = document.querySelector(".welcome")

getComputedStyle(document.documentElement).getPropertyValue('--login-color'); 

PasswordInputField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && PasswordInputField.value.toUpperCase() === "GRAVITY") {
        welcome.classList.add("active");
        body.classList.remove("blocked");
    }
    if (e.key === 'Enter' && PasswordInputField.value.toUpperCase() !== "GRAVITY") {
        welcome.classList.remove("active");
        body.classList.add("blocked");

        setTimeout(() => {document.documentElement.style.setProperty('--login-color', "#fb1e1e")}, 0);
        setTimeout(() => {document.documentElement.style.setProperty('--login-color', "#5CFB1E")}, 233);
        setTimeout(() => {document.documentElement.style.setProperty('--login-color', "#fb1e1e")}, 466);
        setTimeout(() => {document.documentElement.style.setProperty('--login-color', "#5CFB1E")}, 700);
    
    }
});

PasswordInputField.addEventListener("input", function (e){
    body.classList.remove("blocked");
});


