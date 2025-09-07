// 🌗 Dark/Light Mode Toggle
document.getElementById("modeToggle").addEventListener("click", function() {
  document.body.classList.toggle("dark");
});

// 🎮 Counter Game
let counter = 0;
const counterDisplay = document.getElementById("counter");
document.getElementById("increase").onclick = () => {
  counter++;
  counterDisplay.textContent = counter;
};
document.getElementById("decrease").onclick = () => {
  counter--;
  counterDisplay.textContent = counter;
};
document.getElementById("reset").onclick = () => {
  counter = 0;
  counterDisplay.textContent = counter;
};

// ❓ FAQ Toggle
document.querySelectorAll(".faq-item").forEach(item => {
  item.addEventListener("click", () => {
    const answer = item.querySelector(".faq-answer");
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// 🗂️ Tabs
const tabButtons = document.querySelectorAll(".tab-buttons button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    tabContents.forEach(content => content.classList.remove("active"));
    document.getElementById(button.dataset.tab).classList.add("active");
  });
});

// ⏰ Dynamic Welcome Message
const welcome = document.getElementById("welcome-message");
const hour = new Date().getHours();
if (hour < 12) {
  welcome.textContent = "Good Morning! Welcome to Kayoni Graphics";
} else if (hour < 18) {
  welcome.textContent = "Good Afternoon! Welcome to Kayoni Graphics";
} else {
  welcome.textContent = "Good Evening! Welcome to Kayoni Graphics";
}

// 📩 Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("⚠️ Please fill in all fields before submitting.");
    event.preventDefault();
  } else {
    alert("✅ Thank you, " + name + "! Your message has been sent.");
  }
});

// 🖼️ Gallery Navigation
document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelectorAll(".gallery img");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let current = 0;

  gallery.forEach(img => img.style.display = "none");
  gallery[current].style.display = "block";

  function showImage(index) {
    gallery[current].style.display = "none";
    current = (index + gallery.length) % gallery.length;
    gallery[current].style.display = "block";
  }

  prevBtn.addEventListener("click", () => showImage(current - 1));
  nextBtn.addEventListener("click", () => showImage(current + 1));
});
// Reveal service cards on scroll
document.addEventListener("DOMContentLoaded", () => {
  const serviceCards = document.querySelectorAll(".service-card");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    serviceCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < triggerBottom) {
        card.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); 
});
