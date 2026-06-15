// Backend Development internship - Day 01 Task - 01

function checkData() {
            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;

            if (username == "") {
                document.getElementById("message").innerHTML = "Invalid Username";
            }
            else if (password.length < 8){
                document.getElementById("message").innerHTML = "Password too short";
            }
            else{
                document.getElementById("message").innerHTML = "Registration Successful";
            }
        }