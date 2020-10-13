function chronoStart() {
  var seconds = 10;
  var minutes = 0;
  var secText;
  var minText;

  function updateCounter() {
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }
    if (minutes < 0) {
      seconds = 0;
      minutes = 0;
      clearInterval(chrono);
      timeUp();
    }
    secText = seconds;
    minText = minutes;
    if (seconds < 10) {
      secText = "0" + seconds;
    }
    if (minutes < 10) {
      minText = "0" + minutes;
    }
    document.querySelector("#minutes").innerText = minText;
    document.querySelector("#seconds").innerText = secText;
  }
  chrono = setInterval(updateCounter, 1000);
}
