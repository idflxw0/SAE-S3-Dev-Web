const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".text-slider");
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

}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i)
    });
});

//Pour que la navbar stick sur le haut de l'écran quand on scrolle
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("nav");

    window.addEventListener("scroll", function () {
        header.classList.toggle("sticky", window.scrollY > 60);
    });
});

//pour le layout en écran de moins de 1050px
const menu = document.querySelector(".btn-responsive-menu")
const navLinks = document.querySelector(".left-elements")

menu.addEventListener('click',function(){
    navLinks.classList.toggle('responsive-menu')
})


let sectionS = document.querySelectorAll('section');

window.onscroll = () => {
    sectionS.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 185;
        let height = sec.offsetHeight;

        if(top + 200 >= offset && top  < offset + height + 600)
            sec.classList.add('show-animate');
        else
            sec.classList.remove('show-animate');

    })
}
let currentIndex = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    currentIndex = index;
    carousel.style.transform = `translateX(${-index * 100}vw)`;
}

function showNextSlide() {
    currentIndex = (currentIndex + 1) % 5;  // 5 images in the carousel
    showSlide(currentIndex);
}

// Change slide every 3 seconds
setInterval(showNextSlide, 3000);
