function timer(dificuldade) {
    var timeLeft = 300; // Segundos
    const timerElement = document.getElementById("timer");

    console.log(timeLeft);

    const timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else {
            clearInterval(timerInterval);
            timerElement.innerText = "Tempo esgotado!";
        }
    }, 1000);
}