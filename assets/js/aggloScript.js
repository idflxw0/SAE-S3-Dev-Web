const text = document.getElementById('text');
const bird1 = document.getElementById('bird1');
const bird2 = document.getElementById('bird2');
const forest = document.getElementById('forest');
const btn = document.getElementById('btn');
const rocks = document.getElementById('rocks');
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const value = window.scrollY;
    text.style.top = 50 + value * -0.5 + '%';
    bird1.style.top = value * -1.5 + 'px';
    bird1.style.left =value * 2 + 'px';
    bird2.style.top = value * -1.5 + 'px';
    bird2.style.left = value * -5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    rocks.style.top = value * -0.12 + 'px';
    forest.style.top = value * 0.25 + 'px';
    header.style.top = value * 0.5 + 'px'
})



const cardElements = document.querySelectorAll('.card-fill');
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2, // Adjust this threshold as needed
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, options);

cardElements.forEach((card) => {
    observer.observe(card);
});




// const card1 = document.querySelector(".card-1");
// const card2 = document.querySelector(".card-2");
// const card3 = document.querySelector(".card-3");
//
// window.onscroll = () => {
//     animateCard(card1);
//     animateCard(card2);
//     animateCard(card3);
// };
//
// function animateCard(card) {
//     let top = window.scrollY;
//     let offset = card.offsetTop - 175;
//     let height = card.offsetHeight;
//
//     if (top + 500 >= offset && top < offset + height + 100)
//         card.classList.add('show-animate');
//     else
//         card.classList.remove('show-animate');
// }

