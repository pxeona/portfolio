const d_arrow = document.getElementById("downward-arrow");
const nav_bar_items = document.querySelector(".nav-items");
const nav_bar = document.getElementById("nav-bar");
const header = document.getElementById("navigation");
const homePage = document.getElementById("intro");

const headerHeight = header.getBoundingClientRect().height;

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

const addStickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav_bar.classList.add("fixedNav");
  else nav_bar.classList.remove("fixedNav");
};

const obsParams = {
  root: null,
  threshold: 0,
  //rootMargin: `-${headerHeight}px`,
};

const headerObs = new IntersectionObserver(addStickyNav, obsParams);
headerObs.observe(header);

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
