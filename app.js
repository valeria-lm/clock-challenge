function clock() {
  let time = new Date();
  hour = time.getHours();
  min = time.getMinutes();
  sec = time.getSeconds();

  document.querySelectorAll(".clock")[0].innerHTML =
    number(hour) + ":" + number(min) + ":" + number(sec);

  function number(startAgain) {
    if (startAgain < 10) {
      startAgain = "0" + startAgain;
    }
    return startAgain;
  }
}
setInterval(clock, 1000);

/* ----------------------------- */

function toggleColorMode() {
  let body = document.getElementById("body");
  let currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}