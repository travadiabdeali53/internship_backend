// Backend Development internship - Day 01 Task - 01

function checkData(){
    const savedEmail="admin@gmail.com";
    const savedPassword="admin123";

    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    if ( email == savedEmail && password == savedPassword){
        document.getElementById("message").innerHTML = "Login Successful";
    }
    else{
        document.getElementById("message").innerHTML = "Invalid Credentials";
    }
}