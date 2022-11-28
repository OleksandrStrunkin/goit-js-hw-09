import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputDate = document.querySelector('input#datetime-picker');
const startBtn = document.querySelector('button');

const contentDays = document.querySelector('.value[data-days]');
const contentHours = document.querySelector('.value[data-hours]');
const contentMinutes = document.querySelector('.value[data-minutes]');
const contentSeconds = document.querySelector('.value[data-seconds]');

startBtn.setAttribute('disabled', false);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0] < options.defaultDate) { 
       window.alert("Please choose a date in the future")
       document.location.reload();  
      } else {
          startBtn.removeAttribute('disabled');
      }
  },
};

flatpickr(inputDate, options);

class Timer {
  constructor() {
    this.intervalId = null;
    this.isActive = false;
  };

  startTimer() {
    if (this.isActive) {
      return;
    };

    this.isActive = true;

    this.intervallId = setInterval(() => {
      const timeChoose = new Date(inputDate.value);
      const currentTime = Date.now();
      const result = timeChoose - currentTime;
      const time = convertMs(result);
      
      updateClock(time);
        
    }, 1000);
  };

  // stop() {
  //   clearInterval(this.intervalId);
  //   this.isActive = false;
  // }
};

const timer = new Timer();

startBtn.addEventListener('click', timer.startTimer);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0')
}

function updateClock({ days, hours, minutes, seconds }) {
    contentDays.textContent = `${days}`;
    contentHours.textContent = `${hours}`;
    contentMinutes.textContent = `${minutes}`;
    contentSeconds.textContent = `${seconds}`;
}