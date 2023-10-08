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
