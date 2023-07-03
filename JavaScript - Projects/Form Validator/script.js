const usarname = document.getElementById("usarname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");
const form = document.getElementById("form");

const usarnameError = document.getElementById("usarnameError");
const mailError = document.getElementById("mailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");
const repasswordError = document.getElementById("repasswordError");


form.addEventListener("submit", submit);

function submit(e){
    e.preventDefault();
    usernameValidator();
    emailValidator();
    passwordValidator();
    repasswordValidator();

}

function usernameValidator(){

    if(usarname.value.length < 7){
        usarname.className="form-control is-invalid";
        errorMessage("Usarname En az 7 karakterden oluşmalıdır", usarnameError);
    }else{
        usarname.className="form-control is-valid";
    }

}

function emailValidator(){

    if(email.value.length ==0)
    {
        email.className="form-control is-invalid";
        errorMessage("Boş Bırakılamaz", mailError);
    }
    else{

        email.className="form-control is-valid";
    }

}

function passwordValidator(){
    if(password.value.length < 7)
    {
        password.className="form-control is-invalid";
        errorMessage("Parola En az 7 Karakterden oluşmaldır", passwordError);
    }
    else{
        password.className="form-control is-valid";
        repassword.className="form-control is-valid";
    }
}


function repasswordValidator(){
    if(repassword.value !== password.value){
        repassword.className = "form-control is-invalid";
        errorMessage("Parolalar Eşleşmiyor", repasswordError);
    }

}

function errorMessage(message, tag){
    tag.innerHTML = message;
}

