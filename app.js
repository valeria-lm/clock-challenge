function clock() {
  let time = new Date();
  hour = time.getHours();
  min = time.getMinutes();
  sec = time.getSeconds();

  document.querySelectorAll(".clock")[0].innerHTML =
    number(hour) + ":" + number(min) + ":" + number(sec);

  function number(standIn) {
    if (standIn < 10) {
      standIn = "0" + standIn;
    }
    return standIn;
  }
}
setInterval(clock, 1000);