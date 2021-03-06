// btn 1,2,3
const firstBtn = document.querySelector(".frist-btn");
const secondBtn = document.querySelector(".second-btn");
const thirdBtn = document.querySelector(".third-btn");
let photoNum = 1;

function fristSlide() {
  document.querySelector(".slide-container").classList.remove("second-img");
  document.querySelector(".slide-container").classList.remove("third-img");
  photoNum = 1;
}

function secondSlide() {
  document.querySelector(".slide-container").classList.add("second-img");
  document.querySelector(".slide-container").classList.remove("third-img");
  photoNum = 2;
}

function thirdSlide() {
  document.querySelector(".slide-container").classList.add("second-img");
  document.querySelector(".slide-container").classList.add("third-img");
  photoNum = 3;
}

firstBtn.addEventListener("click", fristSlide);
secondBtn.addEventListener("click", secondSlide);
thirdBtn.addEventListener("click", thirdSlide);

// 이전 다음
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

function next() {
  if (photoNum++ == 3) {
    photoNum = 3;
  }
  if (photoNum == 2) {
    document.querySelector(".slide-container").classList.add("second-img");
  } else if (photoNum == 3) {
    document.querySelector(".slide-container").classList.add("third-img");
  }
}

function prev() {
  if (photoNum >= 3) {
    photoNum -= 1;
    document.querySelector(".slide-container").classList.remove("third-img");
  } else if (photoNum == 2) {
    photoNum -= 1;
    document.querySelector(".slide-container").classList.remove("second-img");
  }
}

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);
