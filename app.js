let egg = document.querySelector('.egg');
let startButton = document.querySelector(".egg-yolk");
let timer = 360;
let minutes, seconds;
let isCooking = false;
let countdown;

function startCountdown() {
  console.log(egg.classList);
  if (!isCooking) {
    egg.classList.add('start')
    isCooking = true;
    countdown = setInterval(() => {
      if (timer > 0) {
        minutes = Math.floor(timer / 60);
        seconds = timer - minutes * 60;
        if (seconds < 10) {
          startButton.innerText = `${minutes}:0${seconds}`;
      } else if (seconds == 0) {
          startButton.innerText = `${minutes}:${seconds}0`;
      } else {
          startButton.innerText = `${minutes}:${seconds}`;
      }
        timer -= 1;
      } else {
          startButton.innerText = 'Reset'
          clearInterval(countdown);
          timer = 360;
          isCooking = false;
          egg.classList.remove('start');
      }
    }, 1000);
  } else {
      clearInterval(countdown);
      startButton.innerText = "Start";
      timer = 360;
      isCooking = false;
      egg.classList.remove('start');
  }
}

startButton.addEventListener("click", () => {
  startCountdown();
});

