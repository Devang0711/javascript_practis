const username = document.querySelector(".form .username input#username")
const password = document.querySelector(".form .password input#password")

function formSubmit() {
    let usernameValue = username.value;
    let passwordValue = password.value;
    if (usernameValue && passwordValue) {
        console.log("Username:",usernameValue)
        console.log("Password",passwordValue)
    } else {
        
    }
}