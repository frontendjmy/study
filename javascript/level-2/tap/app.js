const firstBtn = document.querySelector(".tab-button");
const firstContent = document.querySelector(".tab-content");

const secondBtn = document.querySelectorAll(".tab-button")[1];
const secondContent = document.querySelectorAll(".tab-content")[1];

const thirdBtn = document.querySelectorAll(".tab-button")[2];
const thirdContent = document.querySelectorAll(".tab-content")[2];

function firstShow() {
  firstBtn.classList.add("orange");
  firstContent.classList.add("show");
  secondBtn.classList.remove("orange");
  secondContent.classList.remove("show");
  thirdBtn.classList.remove("orange");
  thirdContent.classList.remove("show");
}

function secondShow() {
  secondBtn.classList.add("orange");
  secondContent.classList.add("show");
  firstBtn.classList.remove("orange");
  firstContent.classList.remove("show");
  thirdBtn.classList.remove("orange");
  thirdContent.classList.remove("show");
}

function thirdShow() {
  thirdBtn.classList.add("orange");
  thirdContent.classList.add("show");
  firstBtn.classList.remove("orange");
  firstContent.classList.remove("show");
  secondBtn.classList.remove("orange");
  secondContent.classList.remove("show");
}

firstBtn.addEventListener("click", firstShow);
secondBtn.addEventListener("click", secondShow);
thirdBtn.addEventListener("click", thirdShow);
