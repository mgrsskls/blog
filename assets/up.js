let circle;
let icon;

function onScroll() {
  requestAnimationFrame(function() {
    const scrollY = window.scrollY;
    const angle =
      (289 / (document.body.scrollHeight - window.innerHeight)) * scrollY;
    circle.setAttribute("stroke-dasharray", `${angle}, 289`);
    icon.classList.toggle("is-visible", scrollY > 0);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  circle = document.querySelector(".Up circle");
  icon = document.querySelector(".Up-icon");

  onScroll();
  window.addEventListener("scroll", onScroll);
  window.addEventListener("resize", onScroll);
});
