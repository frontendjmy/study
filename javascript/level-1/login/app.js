const showBtn = document.querySelector(".show-btn");
const closeBtn = document.querySelector(".close-btn");

function showModal() {
  document.querySelector(".modal").classList.add("show-modal");
  document.querySelector(".overlay").classList.add("show-overlay");
}

function hideModal() {
  document.querySelector(".modal").classList.remove("show-modal");
  document.querySelector(".overlay").classList.remove("show-overlay");
}

showBtn.addEventListener("click", showModal);
closeBtn.addEventListener("click", hideModal);
