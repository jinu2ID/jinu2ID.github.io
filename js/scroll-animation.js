// Fades in sections as they enter the viewport using IntersectionObserver
const fadeElements = document.querySelectorAll(".fade-in");

// Watches elements and adds/removes .visible class when they enter/leave the viewport
const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.1,
  },
);

fadeElements.forEach(function (element) {
  observer.observe(element);
});
