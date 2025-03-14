const testimonials = [
    {
        name: "S. Madhu Goud",
        role: "Developer",
        image: "images/founder.png",
        rating: 5,
        treatment: "Physical Therapy",
        feedback: "The treatment was excellent! The staff was very friendly and professional."
    },
    {
        name: "Rajesh ",
        role: "UI/UX Designer",
        image: "images/founder.png",
        rating: 4,
        treatment: "Occupational Therapy",
        feedback: "Great experience! I saw amazing progress in a short time."
    },
    {
        name: "William",
        role: "Software Engineer",
        image: "images/founder.png",
        rating: 5,
        treatment: "Speech Therapy",
        feedback: "Highly recommended! I received great care and attention."
    },
    {
        name: "Karthik",
        role: "Software Engineer",
        image: "images/founder.png",
        rating: 5,
        treatment: "Speech Therapy",
        feedback: "Highly recommended! I received great care and attention."
    },
    {
        name: "Charan",
        role: "Software Engineer",
        image: "images/founder.png",
        rating: 5,
        treatment: "Speech Therapy",
        feedback: "Highly recommended! I received great care and attention."
    },
    {
        name: "Sri Ram",
        role: "Software Engineer",
        image: "images/founder.png",
        rating:3.8,
        treatment: "Speech Therapy",
        feedback: "Highly recommended! I received great care and attention."
    }
];

function renderTestimonials() {
    const container = document.getElementById("testimonial-container");
    container.innerHTML = ""; // Clear previous content

    testimonials.forEach((testimonial) => {
        const card = document.createElement("div");
        card.classList.add("testimonial-card");

        card.innerHTML = `
            <div class="testimonial-header">
                <div class="user-info">
                    <img src="${testimonial.image}" alt="User" class="user-image">
                    <div>
                        <div class="user-name">${testimonial.name}</div>
                        <div class="user-role">${testimonial.role}</div>
                    </div>
                </div>
                <div class="rating">${"★".repeat(testimonial.rating)}${"☆".repeat(5 - testimonial.rating)}</div>
            </div>
            <div class="treatment-name">${testimonial.treatment}</div>
            <p class="testimonial-text">${testimonial.feedback}</p>
        `;
        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", renderTestimonials);
