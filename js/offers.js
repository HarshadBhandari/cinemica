function showhidemenu() {
    var smenu = document.getElementById("myslidermenu"),
        Style = window.getComputedStyle(smenu),
        right = Style.getPropertyValue("right")
    if (right == "-350px") {
        smenu.style.right = "16.5px"
    } else {
        smenu.style.right = "-350px"
    }
}