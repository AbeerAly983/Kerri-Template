var typed = new Typed(".type", {
  strings: [" Kerri Deo.", "A Graphic Designer.", "A Photographer."],
  typeSpeed: 100,
  backSpeed: 100,

  loop: true,
  behavior: "smooth",
});
const navel = document.querySelector(".navbar");

document.addEventListener("scroll", () => {
  if (window.scrollY >= 600) {
    navel.classList.add("scrolled");
  } else {
    navel.classList.remove("scrolled");
  }
});

function colorPalet() {
  document.querySelector(".color-switcher").classList.toggle("active");
  let theme = document.querySelectorAll(".theme");
  theme.forEach((color) => {
    color.addEventListener("click", () => {
      let dataColor = color.getAttribute("data-color");
      document
        .querySelector(":root")
        .style.setProperty("--main-color", dataColor);
      document
        .querySelector(":root")
        .style.setProperty("--hover-color", dataColor);
    });
  });
}

function darkMode() {
  let darkIcon = document.getElementById("fa-moon");
  let lightIcon = document.getElementById("fa-sun");
  let body = document.querySelector("body");

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode") == true) {
    darkIcon.classList.add("d-none");
    lightIcon.classList.remove("d-none");
  } else {
    darkIcon.classList.remove("d-none");
    lightIcon.classList.add("d-none");
  }
}

function scrollTop() {
  window.scrollY(0);
  window.scrollTop({
    behavior: "smooth",
  });
}

(window.onscroll = function () {
  let top = document.getElementById("top");
  if (window.scrollY >= 200) {
    top.classList.remove("opacity-0");
  } else {
    top.classList.add("opacity-0");
  }
})();
