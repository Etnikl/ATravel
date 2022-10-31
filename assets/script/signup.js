function savedata(){
    
    var user = "admin";
    var pass = "password";

    var emptyname = document.forms["mysform"]["s-name"].value;
    var emptytext = document.forms["mysform"]["s-username"].value;
    var emptypass = document.forms["mysform"]["s-password"].value;

    var fullname = document.getElementById("s-name").value;
    var username = document.getElementById("s-username").value;
    var password = document.getElementById("s-password").value;

    var namestyle = document.getElementById("s-name");
    var userstyle = document.getElementById("s-username");
    var passstyle = document.getElementById("s-password");

        
        if ( emptytext == '' && emptypass == '' ) {
            document.getElementById("name-info-s").classList.add("info-show");
            document.getElementById("user-info-s").classList.add("info-show");
            document.getElementById("pass-info-s").classList.add("info-show");
            namestyle.classList.add("info");
            userstyle.classList.add("info");
            passstyle.classList.add("info");
        }
        else if ( emptytext != '' && emptypass == '' ) {
            userstyle.classList.remove("info");
            document.getElementById("user-info").innerHTML = "";
            document.getElementById("pass-info").innerHTML = "Password can not be empty!";
            passstyle.classList.add("info");
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
