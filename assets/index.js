let windowH = window.innerHeight;

const observer = new IntersectionObserver(
  function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        requestAnimationFrame(function() {
          entry.target.classList.add("fadeIn");
          entry.target.style.removeProperty("will-change");
        });
        return;
      }

      entry.target.style.setProperty("will-change", "opacity");
      requestAnimationFrame(function() {
        entry.target.classList.remove("fadeIn");
        entry.target.style.removeProperty("will-change");
      });
    });
  },
  {
    threshold: 0
  }
);

function onScroll() {
  requestAnimationFrame(function() {
    Array.from(document.querySelectorAll(".Section")).forEach(function(el) {
      const { top, bottom, height } = el.getBoundingClientRect();
      let visible = 0;

      // above or below the fold
      if (windowH < top || bottom < 0) {
        visible = 0;
        // completely visible
      } else if (0 <= top && bottom <= windowH) {
        visible = 1;
        // visible, but top + footer not visible
      } else if (top <= 0 && windowH <= bottom) {
        visible = 1;
        // top visible
      } else if (0 < top && windowH <= bottom) {
        visible = (windowH - top) / height;
        // bottom visible
      } else if (top <= 0 && bottom <= windowH) {
        visible = bottom / height;
      }

      el.querySelector(".Headline").style.setProperty("--scale", visible);
    });
  });
}

document.addEventListener("DOMContentLoaded", function() {
  onScroll();
  window.addEventListener("scroll", onScroll);
  window.addEventListener("resize", function() {
    windowH = window.innerHeight;
    onScroll();
  });

  Array.from(document.querySelectorAll(".About .Section")).forEach(function(
    el
  ) {
    observer.observe(el);
  });
});
