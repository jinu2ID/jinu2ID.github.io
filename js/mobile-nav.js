// mobile-nav.js
// Handles hamburger menu toggle and closes menu when a nav link is clicked

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

// Toggle menu open/closed and update aria-expanded for screen readers
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  hamburger.setAttribute("aria-expanded", nav.classList.contains("active"));
});

// Close menu when any nav link is clicked so content is visible after navigating
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    nav.classList.remove("active");
  });
});
