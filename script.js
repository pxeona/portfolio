const d_arrow = document.getElementById("downward-arrow");
const my_work = document.getElementById("my-work");

d_arrow.addEventListener("click", function () {
  my_work.scrollIntoView({ behavior: "smooth" });
});
