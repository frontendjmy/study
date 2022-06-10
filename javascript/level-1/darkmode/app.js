var count = 0;
const changeBgBtn = document.querySelector(".change-btn");
const changeBg = document.querySelector(".bg");

function changeMode() {
  count++;
  if (count % 2 == 1) {
    changeBg.classList.add("bg-dark");
    changeBgBtn.classList.add("btn-dark");
  } else {
    changeBg.classList.remove("bg-dark");
    changeBgBtn.classList.remove("btn-dark");
    changeBg.classList.add("bg-white");
    changeBgBtn.classList.add("btn-white");
  }
}

changeBgBtn.addEventListener("click", changeMode);
