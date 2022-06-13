// 분과 초를 입력시 ms단위 반환
function time(minute, second) {
  var result = (minute * 60 + second) * 1000;
  return result;
}
console.log(time(1, 30));

// 가격 입력시 10% 할인가
// 첫 구매시 1.5$ 할인
function percent(price, fristShopping) {
  var result = price * 0.1;
  if (fristShopping == true) {
    result = price - result - 1.5;
  } else {
    result = price - result;
  }

  return result;
}
console.log(percent(10, true));
