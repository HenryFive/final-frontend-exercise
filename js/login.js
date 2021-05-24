var userDataObj = JSON.parse(localStorage.getItem("userDataLS"));

console.log(userDataObj.email);


document.addEventListener("DOMContentLoaded", function(){
    var form = document.getElementById("login-form");
    console.log(userDataObj);

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        

        if(userDataObj.email == document.getElementById("email").value && userDataObj.password == document.getElementById("password").value)
        {
            window.alert("You are signed in!");
        } else {
            window.alert("Invalid username and password!");
        }

    });
});