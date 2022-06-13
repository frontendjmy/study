function alert(type, text) {
  document.getElementById("alert").style.display = type;
  document.getElementById("str-text").innerText = text;
}

document
  .getElementById("close-btn")
  .addEventListener("click", function close() {
    document.getElementById("alert").style.display = "none";
  });
