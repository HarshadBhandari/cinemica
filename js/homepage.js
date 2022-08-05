var swiper1 = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    debugger: true,

});
var swiper = new Swiper(".review-slider", {
    spaceBetween: 50,
    centeredSlides: true,
    autoplay: false,
    autoplay: {
        delay: 7500,
        disableOnInteraction: true,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    centerInsufficientSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
/*login form script starts*/
var x = document.getElementById("login");
var y = document.getElementById("Register");
var z = document.getElementById("btn");
var a = document.getElementById("hero-container");
var b = document.getElementById("signup-form");
var c = document.getElementById("btn");
var ls = document.getElementById("loginSuccess");



function Register() {
    x.style.left = "-400px"
    y.style.left = "50px"
    z.style.left = "110px"

}

function login() {
    x.style.left = "50px"
    y.style.left = "400px"
    z.style.left = "0px"

}

function showSignIn() {
    a.style.visibility = "visible"
    x.style.transition = ".5s"
    y.style.transition = ".5s"
    c.style.transition = ".5s"
}

function closeform() {
    x.style.transition = "0s"
    y.style.transition = "0s"
    c.style.transition = "0s"
    a.style.visibility = "hidden"


}

function loginSuccess() {
    var a = document.getElementById("hero-container");
    // alert("please filll all the fields");
    var nme = document.getElementById("inputuser").value;

    var pass = document.getElementById("inputpassword").value;

    if (nme == "" || pass == "") {
        alert("Fill All The  Fields");
        return false;
    } else if (nme == "admin" && pass == "123") {
        swal({
            title: "success",
            text: "Login Successfull",
            icon: "success",
            button: "ok",

        });
        a.style.visibility = "hidden";
        document.getElementById("inputuser").value = "";
        document.getElementById("inputpassword").value = "";
        return false;

    } else {
        swal({
            title: "Error",
            text: "Invalid Login Credentials",
            icon: "error",
            button: "ok",

        });

        return false;
    }


}
/*login form script Ends*/
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