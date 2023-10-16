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


//replacement pour la map SVG:
/*
const mapImage = document.getElementById("mapImage");

const replaceImage = (region, imageSource) => {
    region.addEventListener("mouseover", () => {
        mapImage.src = `assets/images/Map/${imageSource}.png`;
    });

    region.addEventListener("mouseout", () => {
        mapImage.src = "assets/images/Map/Baillif.png"; // Replace with the path to the default image
    });
};

// Usage
const regions = {
    "Basse-Terre": "Basse-Terre",
    "Baillif": "Baillif",
    "Bouillante": "Bouillante",
    "Capesterre-Belle-Eau": "Capesterre-Belle-Eau",
    "Gourbeyre": "Gourbeyre",
    "Saint-Claude": "Saint-Claude",
    "Terre-de-Bas": "Terre-de-Bas",
    "Terre-de-Haut": "Terre-de-Haut",
    "Trois-Rivières": "Trois-Rivières",
    "Vieux-Fort": "Vieux-Fort",
    "Vieux-Habitants": "Vieux-Habitants",
};

for (const regionName in regions) {
    replaceImage(document.getElementById(regionName), regions[regionName]);
}
 */
document.querySelectorAll('.territory a').forEach(linkElement => {
    linkElement.addEventListener('click', function(event) {
        event.preventDefault(); // Prevents the page from scrolling to the anchor link

        // Hide all other active cards
        document.querySelectorAll('.dropdown-card.active').forEach(activeCard => {
            activeCard.classList.remove('active');
        });

        const cardId = 'card-' + this.getAttribute('href').substring(1); // Constructs the card's ID
        const cardElement = document.querySelector(`#${cardId}`);

        // Toggle the display of the dropdown card
        cardElement.classList.toggle('active');
    });
});

