function openform(evt, formName) {
    var i, contentx, links;
    contentx = document.getElementsByClassName("contentx");
    for (i = 0; i < contentx.length; i++) {
      contentx[i].style.display = "none";
    }
    document.getElementById(formName).style.display = "flex";
    document.getElementById("sform_id").reset();
    document.getElementById("form_id").reset();

    document.getElementById('username').className = '';
    document.getElementById('user-info').className = 'error-hidden';
    document.getElementById('password').className = '';
    document.getElementById('pass-info').className = 'error-hidden';
    
  }
  

  document.getElementById("defaultOpen").click();
