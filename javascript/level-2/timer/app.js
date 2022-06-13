const alertNum = document.querySelector(".change-num");
let count = 5;

function timeChange() {
  count -= 1;
  if (count >= 0) {
    alertNum.innerHTML = count;
  }
}

setInterval(timeChange, 1000);
