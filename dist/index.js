function fixHeader() {
  var header = document.getElementById("header");

  var checkbox = document.getElementById("navi-toggle");

  if (checkbox.checked == true) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
