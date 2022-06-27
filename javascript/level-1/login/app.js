// 로그인 모달
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const loginForm = document.getElementById("login-form");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

function showModal() {
  modal.classList.add("show-modal");
  overlay.classList.add("show-overlay");
}

function hideModal() {
  modal.classList.remove("show-modal");
  overlay.classList.remove("show-overlay");
}

openBtn.addEventListener("click", showModal);
closeBtn.addEventListener("click", hideModal);

// show 상태에서 bg 클릭시 닫기 기능
overlay.addEventListener("click", function (e) {
  if (e.target == overlay) {
    modal.classList.remove("show-modal");
    overlay.classList.remove("show-overlay");
  }
});

// 아디디 패스워드 확인
function eventIdPw(e) {
  let modalId = document.getElementById("modal__id").value;
  let modalPw = document.getElementById("modal__pw").value;

  if (/\S+@\S+\.\S+/.test(modalId) == false) {
    alert("올바른 이메일 형식이 아닙니다.");
    e.preventDefault();
  } else if (modalId == "") {
    alert("이메일을 입력해주세요.");
    e.preventDefault();
  } else if (/[A-Z]/.test(modalPw) == true) {
    alert("비밀번호에 대문자가 입력되었습니다.");
    e.preventDefault();
  } else if (modalPw == "") {
    alert("비밀번호를 입력해주세요.");
    e.preventDefault();
  } else if (document.getElementById("modal__pw").value.length < 5) {
    alert("비밀번호를 6자 이상으로 설정 해주세요.");
    e.preventDefault();
  }
}

loginForm.addEventListener("submit", eventIdPw);
