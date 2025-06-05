function timer(dificuldade) {
    var timeLeft = 0; // Segundos
    //var dificuldade = ipt_dificuldade.value;
    const timerElement = document.getElementById("timer");

    if (dificuldade == 'facil') {
        timeLeft = 300;
    } else if (dificuldade == 'medio') {
        timeLeft = 180;
    } else if (dificuldade == 'dificil') {
        timeLeft = 60;
    }

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