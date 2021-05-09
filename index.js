const slides = document.getElementById("slides");
let slide = document.querySelectorAll(".slide");
let slideLast = slide[slide.length - 1];
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");

console.log(slideLast);

slides.insertAdjacentElement("afterbegin", slideLast);

function next() {
  let slideFirst = document.querySelectorAll(".slide")[0];
  slides.style.marginLeft = "-200vw";
  slides.style.transition = "all 0.25s";
  setTimeout(function () {
    slides.style.transition = "none";
    slides.insertAdjacentElement("beforeend", slideFirst);
    slides.style.marginLeft = "-100vw";
  }, 250);
}

function previus() {
  let slide = document.querySelectorAll(".slide");
  let slideLast = slide[slide.length - 1];
  slides.style.marginLeft = "0";
  slides.style.transition = "all 0.25s";
  setTimeout(function () {
    slides.style.transition = "none";
    slides.insertAdjacentElement("afterbegin", slideLast);
    slides.style.marginLeft = "-100vw";
  }, 250);
}

arrowRight.addEventListener("click", (e) => {
  next();
});

arrowLeft.addEventListener("click", (e) => {
  previus();
});

// //Para slider automático
// setInterval(function(){
//   next()
// }, 5000)
