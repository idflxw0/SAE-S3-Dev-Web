const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");
var sliderNav = function(manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });


    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");

}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i)
    });
});

//Pour que la navbar stick sur le haut de l'écran quand on scrolle
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        header.classList.toggle("sticky", window.scrollY > 60);
    });
});


let sectionS = document.querySelectorAll('section');

window.onscroll = () => {
    sectionS.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 175;
        let height = sec.offsetHeight;

        if(top + 500 >= offset && top  < offset + height + 100)
            sec.classList.add('show-animate');
        else
            sec.classList.remove('show-animate');

    })
}
