const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let index = 0;

function showSlide(n) {
    if (n >= slides.length) index = 0;
    if (n < 0) index = slides.length - 1;

    document.querySelector(".carousel-container").style.transform = `translateX(${-index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

next.addEventListener("click", () => {
    index++;
    showSlide(index);
});

prev.addEventListener("click", () => {
    index--;
    showSlide(index);
});

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        index = i;
        showSlide(index);
    });
});

// Auto-slide every 3 seconds
setInterval(() => {
    index++;
    showSlide(index);
}, 3000);

showSlide(index);

// specialised container starts hear
document.addEventListener("DOMContentLoaded", function () {
    const services = [
        { name: "", img: "" },
        { name: "Physiotherapy start", img: "images/founder.png" },
        { name: "Physiotherapy", img: "images/founder.png" },
        { name: "Occupational Therapy", img: "images/founder.png" },
        { name: "Speech Therapy", img: "images/founder.png" },
        { name: "Neurological Rehab", img: "images/founder.png" },
        { name: "Sports Injury", img: "images/founder.png" },
        { name: "Pediatric Therapy", img: "images/founder.png" },
        { name: "", img: "" }
        // { name: "Pediatric Therapy end ", img: "images/founder.png" }
    ];

    const container = document.getElementById("scroll-container");

    function addServices() {
        services.forEach(service => {
            const card = document.createElement("div");
            card.classList.add("service-card");

            card.innerHTML = `
                <img src="${service.img}" alt="${service.name}">
                <p>${service.name}</p>
            `;

            container.appendChild(card);
        });
    }

    // Duplicate items to create an infinite loop effect
    addServices();

    // Auto-scroll effect
    let scrollAmount = 0;
    function autoScroll() {
        scrollAmount -= 1; // Adjust speed here
        container.style.transform = `translateX(${scrollAmount}px)`;

        // Reset scroll when it reaches the end
        if (Math.abs(scrollAmount) >= container.scrollWidth / 2) {
            scrollAmount = 0;
        }

        requestAnimationFrame(autoScroll);
    }

    autoScroll();
    autoScroll();
});


// 6 services cards
document.addEventListener("DOMContentLoaded", function () {
    const services = [
        { title: "Service 1", subhead: "Subhead", description: "Detail explanation about the services you are providing", img: "images/founder.png" },
        { title: "Service 2", subhead: "Subhead", description: "Detail explanation about the services you are providing", img: "images/founder.png" },
        { title: "Service 3", subhead: "Subhead", description: "Detail explanation about the services you are providing", img: "images/founder.png" },
        { title: "Service 4", subhead: "Subhead", description: "Detail explanation about the services you are providing", img: "images/founder.png" },
        { title: "Service 5", subhead: "Subhead", description: "Detail explanation about the services you are providing", img: "images/founder.png" },
        { title: "Service 6", subhead: "Subhead", description: "Detail explanation about the services you are providing", img: "images/founder.png" },
        { title: "Service 7", subhead: "Subhead", description: "Detail explanation about the services you are providing", img: "images/founder.png" },
        { title: "Service 8", subhead: "Subhead", description: "Detail explanation about the services you are providing", img: "images/founder.png" },
        { title: "Service 9", subhead: "Subhead", description: "Detail explanation about the services you are providing", img: "images/founder.png" },
        { title: "Service 10", subhead: "Subhead", description: "Detail explanation about the services you are providing", img: "images/founder.png" },
        { title: "Service 11", subhead: "Subhead", description: "Detail explanation about the services you are providing", img: "images/founder.png" }
    ];

    const container = document.getElementById("home-services-container");

    // Show only the first 6 services on the home page
    services.slice(0, 6).forEach(service => {
        const card = document.createElement("div");
        card.classList.add("home-service-card");

        card.innerHTML = `
            <img src="${service.img}" alt="${service.title}" class="home-service-image">
            <div class="home-service-content">
                <h3 class="home-service-title">${service.title}</h3>
                <p class="home-service-subhead">${service.subhead}</p>
                <p class="home-service-description">${service.description}</p>
                <a href="#" class="explore-btn">Explore More</a>
            </div>
        `;

        container.appendChild(card);
    });
});
