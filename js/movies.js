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

var swiper = new Swiper(".review-slider", {
    slidesPerView: 4,
    spaceBetween: 10,
    // centeredSlides: true,
    loop: true,
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: true,
    // },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },

});

var swiper = new Swiper(".recommend-slider", {
    slidesPerView: 4.8,
    spaceBetween: 20,
    centeredSlides: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    // autoplay: {
    //     delay: 10000,
    //     disableOnInteraction: true,
    // },
    // loop: true,
});