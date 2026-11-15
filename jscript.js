const menuToggle = document.querySelector(".menu-toggle");
const navLink = document.querySelector(".nav-link");
const dropdowns = document.querySelectorAll(".dropdown")

menuToggle.addEventListener("click", (e) =>{
  e.stopPropagation();
  navLink.classList.toggle("active");
});

dropdowns.forEach(dropdown =>{
  const toggleBtn = dropdown.querySelector(".dropdown-trig");
  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = dropdown.classList.contains("open");
    dropdowns.forEach(d => d.classList.remove("open"));
    if (!isOpen) {
      dropdown.classList.add("open");
    }
  });
});

window.addEventListener("click", (e) => {
  if (!e.target.closest('.dropdown')) {
    dropdowns.forEach(d => d.classList.remove("open"));
  }
  if (!e.target.closest('.navtab')) {
    navLinks.classList.remove("äctive");
  }
});