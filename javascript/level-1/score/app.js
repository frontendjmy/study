function test(a, b) {
  if (a > 100 || b > 100) {
    console.log("100점 이하 점수를 입력해주세요.");
  }
  if (a < 40 || b < 40) {
    console.log("불합격");
  } else if (a + b > 120) {
    console.log("합격");
  } else {
    console.log("불합격");
  }
}
test(50, 80);
