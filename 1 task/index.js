const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const INTERVAL_STEP = 1000;
let timerId;

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    timerId = setInterval(() => {
      if (+seconds === 0) {
        timerEl.textContent = 'hh:mm:ss';
        clearInterval(timerId);
      } else {
        timerEl.textContent = convertSeconds(seconds);
        seconds--;
      }
    }, INTERVAL_STEP);
  }
};

const convertSeconds = (seconds) =>
  new Date(seconds * 1000).toISOString().substring(11, 19);

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/[^0-9]/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  clearInterval(timerId);
  animateTimer(seconds);

  inputEl.value = '';
});
