function validateUserName() {
    
    let user = document.getElementById('user').value;
    let regUser = /[a-zA-Z]*/;

    if(regUser.test(user)){
        document.getElementById("message").innerHTML="This is valid!";
    }
    if(regUser.test(user)){
        document.getElementById("message").innerHTML="This is invalid!";
    }
}