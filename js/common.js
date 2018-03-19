$(document).ready(function () {
    //Slider in homepage
    var swiper = new Swiper('.home-slider .swiper-container', {
        spaceBetween: 0,
        autoplay: 7000
    });
    //Slider product in homepage
    var swiper = new Swiper('.block-assortment-offers .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        breakpoints: {
            600: {
                slidesPerView: 1,
            },
            800: {
                slidesPerView: 2,
            },
            1100: {
                slidesPerView: 3,
            }
        }
    });
    //Footer list 
    $(".footer-block__m-btn").click(function(){
        $(this).toggleClass("fa-plus-square-o");
        $(this).toggleClass("fa-minus-square-o");
        $(this).next(".footer-block__wrap").fadeToggle('fast').css("display", "flex");
    });
});
function openNav() {
    document.getElementsByClassName("nav")[0].style.width = "250px";
}
function closeNav() {
    document.getElementsByClassName("nav")[0].style.width = "0";
}
