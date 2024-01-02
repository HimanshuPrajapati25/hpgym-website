const header = document.querySelector(".header");
const btn = document.querySelectorAll(".btn-oc");
const boxes = document.querySelectorAll(".box");
const dotLinks = document.querySelectorAll(".dot");

function onToggleNav() {
  header.classList.toggle("nav-open");
}

document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;

  function showSlide(index) {
    boxes.forEach((box, index) => {
      box.classList.remove("active");
    });
    dotLinks.forEach((link) => link.classList.remove("active"));

    boxes[index].classList.add("active");
    dotLinks[index].classList.add("active");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % boxes.length;
    boxes[currentSlide].style.left = "0";
    for (let i = 0; i < currentSlide; i++) {
      boxes[i].style.left = "-100%";
    }
    for (let i = currentSlide + 1; i < boxes.length; i++) {
      boxes[i].style.left = "100%";
    }
    showSlide(currentSlide);
  }

  let autoSlideInterval = setInterval(nextSlide, 3000);

  // Dot links
  dotLinks.forEach(function (link, index) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      clearInterval(autoSlideInterval);
      currentSlide = index;
      showSlide(currentSlide);

      boxes[currentSlide].style.left = "0";
      for (let i = 0; i < currentSlide; i++) {
        boxes[i].style.left = "-100%";
      }
      for (let i = currentSlide + 1; i < boxes.length; i++) {
        boxes[i].style.left = "100%";
      }
      autoSlideInterval;
    });
  });
});
