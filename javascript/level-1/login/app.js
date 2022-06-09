const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");

function showModal() {
  document.querySelector(".modal").classList.add("show-modal");
  document.querySelector(".overlay").classList.add("show-overlay");
}

function hideModal() {
  document.querySelector(".modal").classList.remove("show-modal");
  document.querySelector(".overlay").classList.remove("show-overlay");
}

openBtn.addEventListener("click", showModal);
closeBtn.addEventListener("click", hideModal);

document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    if (document.getElementById("modal__id").value == "") {
      alert("아이디를 입력해주세요.");
      event.preventDefault();
    } else if (document.getElementById("modal__pw").value == "") {
      alert("비밀번호를 입력해주세요.");
      event.preventDefault();
    } else if (document.getElementById("modal__pw").value.length < 5) {
      alert("비밀번호를 6자 이상으로 설정 해주세요.");
      event.preventDefault();
    }
  });
 