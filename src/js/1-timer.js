import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('#datetime-picker');
const timerParts = document.querySelectorAll('.timer .value');
const button = document.querySelector('button[type="button"]');
button.addEventListener('click', startTimer);

let userSelectedDate;
let timerInterval;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= options.defaultDate) {
      iziToast.show({
        title: 'Error',
        titleColor: 'white',
        titleSize: '16',
        messageColor: 'white',
        messageSize: '16',
        message: 'Please choose a date in the future',
        backgroundColor: 'red',
        position: 'topRight',
        timeout: 5000,
      });
      button.disabled = true;
    } else {
      button.disabled = false;
      userSelectedDate = selectedDates[0];
    }
  },
};
flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function setTimer({ days, hours, minutes, seconds }) {
  timerParts[0].textContent = addLeadingZero(days);
  timerParts[1].textContent = addLeadingZero(hours);
  timerParts[2].textContent = addLeadingZero(minutes);
  timerParts[3].textContent = addLeadingZero(seconds);
}

function startTimer() {
  button.disabled = true;
  input.disabled = true;
  timerInterval = setInterval(() => {
    const currentTime = new Date();
    const remainingTime = userSelectedDate - currentTime;
    if (remainingTime > 0) {
      setTimer(convertMs(remainingTime));
    } else {
      clearInterval(timerInterval);
      setTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      input.disabled = false;
    }
  }, 1000);
}
