const navBar = document.querySelector(".navbar-toggler");

function show() {
  document.querySelector(".list-group").classList.toggle("show");
}

navBar.addEventListener("click", show);
