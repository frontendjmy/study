const firstBtn = document.querySelector(".btn1");
const secondBtn = document.querySelector(".btn2");
const thirdBtn = document.querySelector(".btn3");

function fristSlideEvent() {
  document
    .querySelector(".slide-container")
    .classList.remove("slide-second-img");
  document
    .querySelector(".slide-container")
    .classList.remove("slide-third-img");
}

function secondSlideEvent() {
  document.querySelector(".slide-container").classList.add("slide-second-img");
  document
    .querySelector(".slide-container")
    .classList.remove("slide-third-img");
}

function thirdSlideEvent() {
  document.querySelector(".slide-container").classList.add("slide-third-img");
}

firstBtn.addEventListener("click", fristSlideEvent);
secondBtn.addEventListener("click", secondSlideEvent);
thirdBtn.addEventListener("click", thirdSlideEvent);
