// Smooth fade-in animations on scroll
const sections = document.querySelectorAll("section");

const revealSection = () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealSection);
revealSection();
