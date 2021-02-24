const d_arrow = document.getElementById("downward-arrow");

const my_work = document.getElementById("my-work");
const skills = document.getElementById("skills");
const contacts = document.getElementById("footer");

d_arrow.addEventListener("click", function () {
  my_work.scrollIntoView({ behavior: "smooth" });
});
