function validate(){
    
    var user = "admin";
    var pass = "password";

    var emptytext = document.forms["myform"]["username"].value;
    var emptypass = document.forms["myform"]["password"].value;

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var userstyle = document.getElementById("username");
    var passstyle = document.getElementById("password");
        
        if ( emptytext == '' && emptypass == '' ) {
            document.getElementById("user-info").classList.add("error-show");
            document.getElementById("pass-info").classList.add("error-show");
            userstyle.classList.add("error");
            passstyle.classList.add("error");
        }
        else if ( emptytext != '' && emptypass == '' ) {
            userstyle.classList.remove("error");
            document.getElementById("user-info").innerHTML = "";
            document.getElementById("pass-info").innerHTML = "Password can not be empty!";
            passstyle.classList.add("error");
        }
        else if ( emptypass == '' && emptypass != '' ) {
            userstyle.classList.add("error");
            document.getElementById("user-info").innerHTML = "Username can not be empty!";
            document.getElementById("pass-info").innerHTML = "";
            passstyle.classList.remove("error");
        }
        else {
            if ( username == user && password == pass){
                const loading = document.querySelector('.loading');
                const content = document.querySelector('.content');
                const intro = document.querySelector('.login-intro');
                setTimeout(() => {
                intro.style.display = "none";
                content.style.display = "none";
                loading.style.display = "flex";
                }, 300)
    
                    setTimeout((z) => {
                    window.location = "dashboard.html"
                    }, 1500)
            }
            else if ( username == user && password != pass ){
                // alert("Password incorrect");
                userstyle.classList.remove("error");
                document.getElementById("user-info").innerHTML = "";
                document.getElementById("pass-info").innerHTML = "Password incorrect!";
                passstyle.classList.add("error");
            }
            else if ( username != user && password == pass) {
                // alert("Username incorrect");
                userstyle.classList.add("error");
                document.getElementById("user-info").innerHTML = "Username incorrect!";
                document.getElementById("pass-info").innerHTML = "";
                passstyle.classList.remove("error");
            }
            else if ( username != user && password != pass ){
                // alert("Username incorrect");
                document.getElementById("user-info").innerHTML = "Username incorrect!";
                document.getElementById("pass-info").innerHTML = "Password incorrect!";
                userstyle.classList.add("error");
                passstyle.classList.add("error");
            }
            else {
                return false;
            }
        }
        
}
