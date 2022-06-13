// tutorial
function game(num) {
  if (num % 9 == 9) {
    console.log("박수*2");
  } else if (num % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
}
game(9);

// 369
function formValue(num) {
  if (num % 10 == 3 || num % 10 == 6 || num % 10 == 9) {
    console.log("박수");
  } else {
    console.log("통과");
  }
}

formValue(30);
