const text = document.getElementById('text');
const bird1 = document.getElementById('bird1');
const bird2 = document.getElementById('bird2');
const forest = document.getElementById('forest');
const btn = document.getElementById('btn');
const rocks = document.getElementById('rocks');
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const value = window.scrollY;
    text.style.top = 10 + value * -0.05+ '%';
    bird1.style.top = value * -1.5 + 'px';
    bird1.style.left =value * 2 + 'px';
    bird2.style.top = value * -1.5 + 'px';
    bird2.style.left = value * -5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    rocks.style.top = value * -0.12 + 'px';
    forest.style.top = value * 0.25 + 'px';
    header.style.top = value * 0.5 + 'px'
});
const cardElements = document.querySelectorAll('.card-fill');
const button = document.querySelectorAll('.button-explore');
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2, // Adjust this threshold as needed
};
//animation
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

button.forEach((hide_button)=> {
    observer.observe(hide_button);
});

//TEXT to MAP
const textElements = document.querySelectorAll('[data-region]');
textElements.forEach((textElement) => {
    textElement.addEventListener('mouseenter', () => {
        const regionId = textElement.getAttribute('data-region');
        const region = document.getElementById(regionId);

        if (region) {
            // Change the fill color of the region when hovering over the text
            region.style.fill = '#0a3622';
        }
    });

    textElement.addEventListener('mouseleave', () => {
        const regionId = textElement.getAttribute('data-region');
        const region = document.getElementById(regionId);

        if (region) {
            region.style.fill = '#ff0000';
        }
    });
});


// Map to TEXT
const mapRegions = document.querySelectorAll('.region-hover');
mapRegions.forEach((mapRegion) => {
    mapRegion.addEventListener('mouseenter', () => {
        const regionId = mapRegion.getAttribute('xlink:title');
        const textElement = document.querySelector(`[id="${regionId}"]`);
        const region = document.getElementById(regionId);

        if (textElement) {
            textElement.style.color = 'red';
            region.style.fill = '#0a3622';
        }
    });

    mapRegion.addEventListener('mouseleave', () => {
        const regionId = mapRegion.getAttribute('xlink:title');
        const textElement = document.querySelector(`[id="${regionId}"]`);
        const region = document.getElementById(regionId);

        if (textElement && region) {
            textElement.style.color = '#fff';
            region.style.fill = '#ff0000';
        }
    });
});

const TrendingSlider = new Swiper('.trending-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});