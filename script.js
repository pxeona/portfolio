const d_arrow = document.getElementById("downward-arrow");
const nav_bar_items = document.querySelector(".nav-items");
const nav_bar = document.getElementById("nav-bar");

const handleHover = function (e) {
  if (e.target.classList.contains("nav-link")) {
    const parent = e.target.closest("#nav-bar");
    const siblings = parent.querySelectorAll(".nav-link");

    siblings.forEach((el) => {
      if (el !== e.target) {
        el.style.opacity = this;
      }
    });
  }
};

const smoothScrolling = function (eventGen) {
  const location = document.querySelector(eventGen.getAttribute("href"));
  location.scrollIntoView({ behavior: "smooth" });
};

d_arrow.addEventListener("click", (e) => {
  e.preventDefault();
  smoothScrolling(e.target);
});

nav_bar_items.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.classList.contains("nav-link")) {
    smoothScrolling(e.target);
  }
});

nav_bar.addEventListener("mouseover", handleHover.bind(0.5));
nav_bar.addEventListener("mouseout", handleHover.bind(1));
