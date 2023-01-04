const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const ampm = document.getElementById('ampm');

const updateClock = () => {
  let h = new Date().getHours();
  let m = new Date().getMinutes(); // gets date from computer
  let s = new Date().getSeconds();
  let ap = 'AM';

  if (h > 12) {
    h = h - 12;
    ap = 'PM';
  }

  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m; // puts zero before number if the number if less than 10
  s = s < 10 ? '0' + s : s;

  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
  ampm.innerText = ap;

  setTimeout(() => {
    updateClock();
  }, 1000); // calls function every second
};

updateClock();
