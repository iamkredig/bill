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

PasswordInputField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && PasswordInputField.value.toUpperCase() === "GRAVITY") {
        welcome.classList.add("active");
        body.classList.remove("blocked");
    }
    if (e.key === 'Enter' && PasswordInputField.value.toUpperCase() !== "GRAVITY") {
        welcome.classList.remove("active");
        setTimeout(function(){
            body.classList.add("blocked");

        }, 70); 
        body.classList.remove("blocked");
    }
      
});