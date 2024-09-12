// JavaScript for triggering animations on scroll
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
  
    const options = {
      threshold: 0.5 // Adjust this to trigger when half of the section is visible
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    }, options);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  