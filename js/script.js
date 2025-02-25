let minute = document.getElementById('minute');
let second = document.getElementById('second');
let countdownInput = document.getElementById('countdown');
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let isRunning = false; 
let timeout;
let totalSeconds = 0;
startBtn.addEventListener('click', () => {
  if (!isRunning) {
    totalSeconds = Number(countdownInput.value) * 60 || 0;
    updateDisplay(); 
    isRunning = true; 
    timeout = setInterval(counter, 1000); 
  }
});
stopBtn.addEventListener('click', () => {
  clearInterval(timeout);
  isRunning = false;
});
function counter() {
  if (totalSeconds > 0) {
    totalSeconds--; 
    updateDisplay(); 
  } else {
    clearInterval(timeout); 
    isRunning = false;
  }
}
function updateDisplay() {
  let secs = String(totalSeconds % 60).padStart(2, '0');
  let mins = String(Math.floor(totalSeconds % 3600 / 60)).padStart(2, '0'); 

  second.textContent = secs;
  minute.textContent = mins;
}


