var count = 0;
const changeBgBtn = document.querySelector(".change-btn");

function changeMode() {
  count++;
  if (count % 2 == 1) {
    document.querySelector(".bg").classList.add("bg-dark");
    document.querySelector(".change-btn").classList.add("btn-dark");
    console.log("홀수");
  } else {
    document.querySelector(".bg").classList.remove("bg-dark");
    document.querySelector(".change-btn").classList.remove("btn-dark");
    document.querySelector(".bg").classList.add("bg-white");
    document.querySelector(".change-btn").classList.add("btn-white");
    console.log("짝수");
  }
}

changeBgBtn.addEventListener("click", changeMode);
