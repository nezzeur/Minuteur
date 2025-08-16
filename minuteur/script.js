let intervalId;
let temps = 0;
const timerElement = document.getElementById("timer");

function startTimer() {
    if (!intervalId) {
        intervalId = setInterval(() => {
            let minutes = parseInt(temps / 60, 10);
            let secondes = parseInt(temps % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            secondes = secondes < 10 ? "0" + secondes : secondes;

            timerElement.innerText = `${minutes}:${secondes}`;
            temps += 1;
        }, 1000);
    }
}

function pauseTimer() {
    if (intervalId){
        clearInterval(intervalId);
        intervalId = null;
    }
}

function clearTimer() {
    clearInterval(intervalId);
    intervalId = null;
    temps = 0;
    timerElement.innerText = "00:00";
}