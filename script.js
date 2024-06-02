let clicked = false;
document.querySelector(".menu-icon").addEventListener("click", () => {
  if (!clicked) {
    document.querySelector(".nav-links").classList.remove("hidden");
    clicked = true;
  } else {
    document.querySelector(".nav-links").classList.add("hidden");
    clicked = false;
  }
});

// document.querySelector(".home-nav").addEventListener("click", () => {
//   document.querySelector(".nav-links").classList.add("hidden");
//   clicked = false;
// });
// document.querySelector(".about-nav").addEventListener("click", () => {
//   document.querySelector(".nav-links").classList.add("hidden");
//   clicked = false;
// });
// document.querySelector(".skills-nav").addEventListener("click", () => {
//   document.querySelector(".nav-links").classList.add("hidden");
//   clicked = false;
// });
// document.querySelector(".projects-nav").addEventListener("click", () => {
//   document.querySelector(".nav-links").classList.add("hidden");
//   clicked = false;
// });
// document.querySelector(".contact-nav").addEventListener("click", () => {
//   document.querySelector(".nav-links").classList.add("hidden");
//   clicked = false;
// });

const navItems = document.querySelectorAll(".nav");
navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.add("hidden");
    clicked = false;
  });
});

const bfElements = document.querySelectorAll("main, footer");
bfElements.forEach((bfElement) => {
  bfElement.addEventListener("click", () => {
    if (clicked) {
      document.querySelector(".nav-links").classList.add("hidden");
    }
  });
});

document.querySelector("footer").addEventListener("click", () => {
  if (clicked) {
    document.querySelector(".nav-links").classList.add("hidden");
  }
});
