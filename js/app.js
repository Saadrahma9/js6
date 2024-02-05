// ---------------DARK MODE ---------------//
const body = document.querySelector('body'),
  nav = document.querySelector('nav'),
  modeToggle = document.querySelector('.dark_light'),
  searchToggle = document.querySelector('.searchbox');
// ---------------toggle dark light---------------//
modeToggle.addEventListener('click', () => {
  modeToggle.classList.toggle('active');
  body.classList.toggle('dark');
});

// ---------------ANALOG CLOCK---------------//

let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');

function displayTime() {
  let date = new Date();

  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getUTCSeconds();

  let hRotaion = 30 * hh + mm / 2 + ss / 120;
  let mRotaion = 6 * mm + ss / 10;
  let sRotaion = 6 * ss;

  hour.style.transform = `rotate(${hRotaion}deg)`;
  minute.style.transform = `rotate(${mRotaion}deg)`;
  second.style.transform = `rotate(${sRotaion}deg)`;
}

setInterval(displayTime, 1000);

// ---------------DIGITEL CLOCK---------------//

setInterval(() => {
  let hrs = document.getElementById('hrs');
  let min = document.getElementById('min');
  let sec = document.getElementById('sec');

  let currentTime = new Date();

  hrs.innerText = currentTime > 12 ? currentTime - 12 : currentTime;

  hrs.innerHTML = currentTime.getHours();
  min.innerHTML = currentTime.getMinutes();
  sec.innerHTML = currentTime.getSeconds();
}, 1000);

// --------------STOPWATCH SCRIPT --------------//

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector('.timer_display');
let int = null;

document.getElementById('start_timer').addEventListener('click', () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);
});

document.getElementById('pause_timer').addEventListener('click', () => {
  clearInterval(int);
});

document.getElementById('reset_timer').addEventListener('click', () => {
  clearInterval(int);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timeRef.innerHTML = '00 : 00 : 00 : 000';
});

function displayTimer() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  let h = hours < 10 ? '0' + hours : hours;
  let m = minutes < 10 ? '0' + hours : hours;
  let s = seconds < 10 ? '0' + seconds : seconds;
  let ms =
    milliseconds < 10
      ? '00' + milliseconds
      : milliseconds < 100
      ? '0' + milliseconds
      : milliseconds;

  timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
