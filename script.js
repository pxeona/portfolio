const d_arrow = document.getElementById("downward-arrow");
const nav_bar_items = document.querySelector(".nav-items");

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

const smoothScrolling = function (eventGen) {
  const location = document.querySelector(eventGen.getAttribute("href"));
  location.scrollIntoView({ behavior: "smooth" });
};
