// toggle
const navBar = document.querySelector(".navbar-toggler");

function show() {
  document.querySelector(".list-group").classList.toggle("show");
}

navBar.addEventListener("click", show);

// scroll event
// font size change
let scrollY = window.scrollY;

function scrollEvent() {
  if (window.scrollY > 200) {
    document.querySelector(".navbar-brand").classList.add("fs-change");
    console.log(window.scrollY);
  } else {
    document.querySelector(".navbar-brand").classList.remove("fs-change");
  }
}

window.addEventListener("scroll", scrollEvent);

// 회원약관 다 읽었을 시 alert
const scrollTerms = document.querySelector(".terms");

function scrollAlert() {
  let termsTop = document.querySelector(".terms").scrollTop;
  let termsHeight = document.querySelector(".terms").scrollHeight;
  let termsDivHeight = document.querySelector(".terms").clientHeight;

  if (termsTop + termsDivHeight == termsHeight) {
    alert("alert");
  }
}

scrollTerms.addEventListener("scroll", scrollAlert);
