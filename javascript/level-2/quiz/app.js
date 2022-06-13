var present = 60000;
var future = 0;
if (present >= 50000) {
  future = present * 1.2 * 1.2;
} else {
  future = present * 1.15 * 1.15;
}
console.log(future);

// Refill
var first = 360;
var total = 0;
total = (first * 2) / 3 + (((first * 2) / 3) * 2) / 3;
console.log(total);

let count = 0;
const submitBtn = document.getElementById("send-answer");

function answerAlert() {
  count++;
  if (count == 3) {
    alert("멍청아");
  }

  if (document.getElementById("answer").value == 1335) {
    alert("정답입니다.");
  }
}

submitBtn.addEventListener("click", answerAlert);
