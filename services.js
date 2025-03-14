document.addEventListener("DOMContentLoaded", function () {

    // Services Data (with correct 'img' key)
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

    const container = document.getElementById("services-container");

    services.forEach(service => {
        const card = document.createElement("div");
        card.classList.add("service-card");

        card.innerHTML = `
            <img src="${service.img}" alt="${service.title}" class="service-image">
            <div class="service-content">
                <h3 class="service-title">${service.title}</h3>
                <p class="service-subhead">${service.subhead}</p>
                <p class="service-description">${service.description}</p>
                <a href="#" class="explore-btn">Explore More</a>
            </div>
        `;

        container.appendChild(card);
    });
});