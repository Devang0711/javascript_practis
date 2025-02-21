let username = document.querySelector("form input#username")
let password = document.querySelector("form input#password")

let usernameOutput = document.querySelector(
    "form.form-output p:first-child span"
);
let passwordOutput = document.querySelector(
    "form.form-output p:last-child span"
);

function formSubmit(e){
    const usernameValue = username.value;
    const passwordValue = password.value;
}

if(usernameValue && passwordValue){
    console.log("username :", usernameValue);
    console.log("password :", passwordValue);
    usernameOutput.innerText = usernameValue;
    passwordOutput.innerText = passwordValue;
}
else{

}