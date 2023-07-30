// Set the timer duration in seconds
const duration = 120;

let timerInterval;
let timerDisplay = document.getElementById('timer');
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');

let remainingTime = duration;

function startTimer() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = true;

    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    let minutes = Math.floor(remainingTime / 60);
    let seconds = remainingTime % 60;
    let hours = Math.floor(minutes / 60);
    minutes %= 60;

    timerDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

    if (remainingTime <= 0) {
        stopTimer();
    } else {
        remainingTime--;
    }
}

function stopTimer() {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = false;

    clearInterval(timerInterval);
}

function resetTimer() {
    remainingTime = duration;
    timerDisplay.textContent = '00:00:00';
}

function pad(value) {
    return value.toString().padStart(2, '0');
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
