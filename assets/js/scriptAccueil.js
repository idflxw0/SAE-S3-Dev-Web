
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




