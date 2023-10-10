
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




