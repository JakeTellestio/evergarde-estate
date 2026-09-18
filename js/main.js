(function () {
  "use strict";

  /* Mobile nav */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Gallery lightbox */
  var grid = document.querySelector(".gallery-grid");
  var lightbox = document.getElementById("lightbox");
  if (!grid || !lightbox) return;

  var items = Array.prototype.slice.call(grid.querySelectorAll(".gallery-item"));
  var imgEl = lightbox.querySelector(".lightbox-img");
  var captionEl = lightbox.querySelector(".lightbox-caption");
  var btnClose = lightbox.querySelector(".lightbox-close");
  var btnPrev = lightbox.querySelector(".lightbox-prev");
  var btnNext = lightbox.querySelector(".lightbox-next");
  var index = 0;

  function openAt(i) {
    index = (i + items.length) % items.length;
    var btn = items[index];
    var full = btn.getAttribute("data-full") || btn.querySelector("img").src;
    var alt = btn.querySelector("img").alt || "";
    imgEl.src = full;
    imgEl.alt = alt;
    captionEl.textContent = alt;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    btnClose.focus();
  }

  function close() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    imgEl.removeAttribute("src");
  }

  items.forEach(function (btn, i) {
    btn.addEventListener("click", function () { openAt(i); });
  });

  btnClose.addEventListener("click", close);
  btnPrev.addEventListener("click", function () { openAt(index - 1); });
  btnNext.addEventListener("click", function () { openAt(index + 1); });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) close();
  });

  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") openAt(index - 1);
    if (e.key === "ArrowRight") openAt(index + 1);
  });
})();
