//Navabar Script
document.addEventListener("DOMContentLoaded", () => {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;

            // Now select the elements after the navbar is loaded
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');

            if (hamburger && navLinks) {
                hamburger.addEventListener('click', () => {
                    navLinks.classList.toggle('show');
                });
            }
        })
        .catch(error => console.error("Error loading navbar:", error));
});


// Our team script in about page

const teamMembers = [
    {
        name: "S. Madhu Goud",
        role: "Frontend Developer | UI/UX Designer",
        bio: "Passionate about building user-friendly interfaces.",
        image: "images/founder.png"
    },
    {
        name: "Charan",
        role: "Full Stack Developer",
        bio: "Loves solving complex problems with elegant code.",
        image: "images/college.png"
    },
    {
        name: "Rahul Sharma",
        role: "Data Scientist",
        bio: "Data enthusiast with a love for AI and ML.",
        image: "images/founder.png"
    },
    {
        name: "Ananya Verma",
        role: "Cybersecurity Specialist",
        bio: "Dedicated to keeping systems and data secure.",
        image: "images/college.png"
    },
    {
        name: "Karthik Reddy",
        role: "Backend Developer",
        bio: "Building scalable and efficient server-side applications.",
        image: "images/founder.png"
    }
];

const wrapper = document.querySelector(".team-container");

let currentIndex = 0;
let visibleCards = getVisibleCards();
const cardWidth = 420; // Adjust based on actual card size

// Determine number of visible cards based on screen size
function getVisibleCards() {
    if (window.innerWidth <= 768) return 1; // Mobile: Show 1 card
    if (window.innerWidth <= 1024) return 2; // Tablet: Show 2 cards
    return 3; // Desktop: Show 3 cards
}

// Generate team cards dynamically with extra space at the end
function createCards() {
    wrapper.innerHTML = "";
    teamMembers.forEach(member => {
        let card = document.createElement("div");
        card.classList.add("team-card");
        card.innerHTML = `
            <p class="team-bio">${member.bio}</p>
            <img src="${member.image}" alt="${member.name}" class="team-image">
            <h3 class="team-name">${member.name}</h3>
            <p class="team-role">${member.role}</p>
        `;
        wrapper.appendChild(card);
    });

    // **🔥 Add an extra empty space card at the end 🔥**
    let emptySpace = document.createElement("div");
    emptySpace.classList.add("team-card");
    emptySpace.style.opacity = "0"; // Make it invisible
    emptySpace.style.pointerEvents = "none"; // Disable interaction
    wrapper.appendChild(emptySpace);

    updateCarousel();
}

// **🔥 Fix: Ensure Last Card Visibility 🔥**
function updateCarousel() {
    const totalCards = teamMembers.length;
    const maxIndex = totalCards - visibleCards + 1; // +1 for extra space

    if (currentIndex > maxIndex) currentIndex = maxIndex;
    if (currentIndex < 0) currentIndex = 0;

    const offset = -(currentIndex * cardWidth);
    wrapper.style.transform = `translateX(${offset}px)`;
}

// Move forward
function nextSlide() {
    if (currentIndex < teamMembers.length - visibleCards + 1) { // +1 for extra space
        currentIndex++;
    }
    updateCarousel();
}

// Move backward
function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    }
    updateCarousel();
}

// Adjust on window resize
window.addEventListener("resize", () => {
    visibleCards = getVisibleCards();
    updateCarousel();
});

// Initialize cards on page load
createCards();
