
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the target is visible

    document.querySelectorAll('.card-fill').forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener("scroll", function() {
    const animateElements = document.querySelectorAll('.animate');

    animateElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        // Only add the class when the element is within a certain range of the viewport
        if (elementTop < window.innerHeight - 10 && elementTop >= 0) { // Adjusted range
            element.classList.add('show-animate');
        } else {
            element.classList.remove('show-animate');
        }
    });
});







