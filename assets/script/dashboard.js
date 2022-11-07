function openDash(evt, dashview) {
    var i, dashboardtab, dashboardlinks;
    dashboardtab = document.getElementsByClassName("dashboardtab");
    for (i = 0; i < dashboardtab.length; i++) {
        dashboardtab[i].style.display = "none";
    }
    dashboardlinks = document.getElementsByClassName("dashboardlinks");
    for (i = 0; i < dashboardlinks.length; i++) {
        dashboardlinks[i].className = dashboardlinks[i].className.replace(" active", "");
    }
    document.getElementById(dashview).style.display = "flex";
    evt.currentTarget.className += " active";
}
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("mainview").click();