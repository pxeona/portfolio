//DOM elements

const d_arrow = document.getElementById("downward__arrow");
const nav_items_div = document.querySelector(".nav__items");
const nav_bar = document.getElementById("nav__bar");
const nav_bar_items = document.querySelectorAll(".nav__item");
const header = document.getElementById("navigation");
const homePage = document.getElementById("intro");
const sections = document.querySelectorAll(".section");
const gridImages = document.querySelectorAll(".grid__image");
const hamburger = document.querySelector(".hamburger");

const headerHeight = header.getBoundingClientRect().height;

//Methods

const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const parent = e.target.closest("#nav__bar");
    const siblings = parent.querySelectorAll(".nav__link");

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
  if (!entry.isIntersecting) nav_bar.classList.add("fixedNav");
  else nav_bar.classList.remove("fixedNav");
};

const loadOnScroll = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section__hidden");
  observer.unobserve(entry.target);
};

const unBlurImage = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("blur__img");
  observer.unobserve(entry.target);
};

//Observer parameters

const obsParamsHeader = {
  root: null,
  threshold: 0,
  //rootMargin: `-${headerHeight}px`,
};

const obsParamsSection = {
  root: null,
  threshold: 0.1,
};

const obsParamsImage = {
  root: null,
  threshold: 0,
};

//Observers

const headerObs = new IntersectionObserver(addStickyNav, obsParamsHeader);
headerObs.observe(header);

const sectionObs = new IntersectionObserver(loadOnScroll, obsParamsSection);

const imageObs = new IntersectionObserver(unBlurImage, obsParamsImage);

sections.forEach(function (section) {
  sectionObs.observe(section);
  section.classList.add("section__hidden");
});

gridImages.forEach(function (image) {
  imageObs.observe(image);
  image.classList.add("blur__img");
});

//Event listeners

d_arrow.addEventListener("click", (e) => {
  e.preventDefault();
  smoothScrolling(e.target);
});

nav_items_div.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    smoothScrolling(e.target);
  }
});

nav_bar.addEventListener("mouseover", handleHover.bind(0.5));
nav_bar.addEventListener("mouseout", handleHover.bind(1));

//Responsive nav bar
hamburger.addEventListener("click", () => {
  toggleMenu();
});

nav_bar_items.forEach((item) => {
  item.addEventListener("click", () => {
    if (hamburger.classList.contains("open")) {
      toggleMenu();
    }
  });
});

function toggleMenu() {
  hamburger.classList.toggle("open");
  nav_items_div.classList.toggle("open");
}
