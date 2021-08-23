function startTimer(duration) {
  let timer = duration;
  let minutes;
  let seconds;

  setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.querySelector('.timer__minutes').innerHTML = minutes;
    document.querySelector('.timer__seconds').innerHTML = seconds;

    if (--timer < 0) timer = duration;
  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  const duration = 60 * 30;
  startTimer(duration);
});