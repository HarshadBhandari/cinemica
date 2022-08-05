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

function showHideDate() {
    var dopt = document.getElementById("scrolldownbutton");
    var arr = document.getElementById("arrowpoint");
    Style = window.getComputedStyle(dopt);
    height = Style.getPropertyValue("height");

    if (height == "50px") {
        dopt.style.height = "180px"


    } else {
        dopt.style.height = "50px"

    }
}

function showHidelanguage() {
    var dopt = document.getElementById("scrolldownbutton1"),
        Style = window.getComputedStyle(dopt),
        height = Style.getPropertyValue("height")

    if (height == "50px") {
        dopt.style.height = "150px"
    } else {
        dopt.style.height = "50px"
    }
}

function showHideCategories() {
    var dopt = document.getElementById("scrolldownbutton2"),
        Style = window.getComputedStyle(dopt),
        height = Style.getPropertyValue("height")

    if (height == "50px") {
        dopt.style.height = "375px"
    } else {
        dopt.style.height = "50px"
    }
}

function showHideMoreFilters() {
    var dopt = document.getElementById("scrolldownbutton3"),
        Style = window.getComputedStyle(dopt),
        height = Style.getPropertyValue("height")

    if (height == "50px") {
        dopt.style.height = "215px"
    } else {
        dopt.style.height = "50px"
    }
}

function showHidePrice() {
    var dopt = document.getElementById("scrolldownbutton4"),
        Style = window.getComputedStyle(dopt),
        height = Style.getPropertyValue("height")

    if (height == "50px") {
        dopt.style.height = "150px"
    } else {
        dopt.style.height = "50px"
    }
}