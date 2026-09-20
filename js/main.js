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

  /* Home hero: click through gallery photos */
  var hero = document.querySelector("[data-hero-picker]");
  if (hero) {
    var bg = hero.querySelector(".hero-bg");
    var label = hero.querySelector("[data-hero-label]");
    var prev = hero.querySelector("[data-hero-prev]");
    var next = hero.querySelector("[data-hero-next]");
    var slides = [
      'images/hero.jpg',
      'images/gallery-01.jpg',
      'images/gallery-02.jpg',
      'images/gallery-03.jpg',
      'images/gallery-04.jpg',
      'images/gallery-05.jpeg',
      'images/gallery-06.jpeg',
      'images/gallery-07.jpeg',
      'images/gallery-08.jpeg',
      'images/gallery-09.jpeg',
      'images/gallery-10.jpeg',
      'images/gallery-11.jpeg',
      'images/gallery-12.jpeg',
      'images/gallery-13.jpeg',
      'images/gallery-14.jpeg',
      'images/gallery-15.jpeg',
      'images/gallery-16.jpeg',
      'images/gallery-17.jpeg',
      'images/gallery-18.jpeg',
      'images/gallery-19.jpeg',
      'images/gallery-20.jpeg',
      'images/gallery-21.jpeg',
      'images/gallery-22.jpeg',
      'images/gallery-23.jpeg',
      'images/gallery-24.jpeg',
      'images/gallery-25.jpeg',
      'images/gallery-26.jpeg',
      'images/gallery-27.jpeg',
      'images/gallery-28.jpeg',
      'images/gallery-29.jpeg',
      'images/gallery-30.jpeg',
      'images/gallery-31.jpeg',
      'images/gallery-32.jpeg',
      'images/gallery-33.jpeg',
      'images/gallery-34.jpeg',
      'images/gallery-35.jpeg',
      'images/gallery-36.jpeg',
      'images/gallery-37.jpg',
      'images/gallery-38.jpg'
    ];
    var bust = "20260918e";
    var i = 0;
    try {
      var saved = sessionStorage.getItem("evergarde-hero-try");
      if (saved !== null) {
        var n = parseInt(saved, 10);
        if (!isNaN(n) && n >= 0 && n < slides.length) i = n;
      }
    } catch (e) {}

    function nameOf(path) {
      var base = path.split("/").pop().replace(/\.[^.]+$/, "");
      return base === "hero" ? "hero" : base.replace("gallery-", "");
    }

    function show(n) {
      i = (n + slides.length) % slides.length;
      var path = slides[i] + "?v=" + bust;
      bg.style.backgroundImage = "url('" + path + "')";
      bg.setAttribute("aria-label", "Hero photo " + nameOf(slides[i]));
      if (label) label.textContent = (i + 1) + " / " + slides.length + " · " + nameOf(slides[i]);
      try { sessionStorage.setItem("evergarde-hero-try", String(i)); } catch (e) {}
    }

    if (prev) prev.addEventListener("click", function () { show(i - 1); });
    if (next) next.addEventListener("click", function () { show(i + 1); });
    show(i);
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

  function openAt(idx) {
    index = (idx + items.length) % items.length;
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

  items.forEach(function (btn, idx) {
    btn.addEventListener("click", function () { openAt(idx); });
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
