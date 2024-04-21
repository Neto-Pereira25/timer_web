function watch() {

    function getTimeFromSeconds(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    const clock = document.querySelector('.relogio');
    let seconds = 0;
    let timer;

    function startTimer() {
        timer = setInterval(function () {
            seconds++;
            clock.innerHTML = getTimeFromSeconds(seconds);
        }, 1000);
    }

    document.addEventListener('click', function (event) {
        const element = event.target;

        if (element.classList.contains('iniciar')) {
            clock.classList.remove('pausado');
            clearInterval(timer);
            startTimer();
        }

        if (element.classList.contains('pausar')) {
            clearInterval(timer);
            clock.classList.add('pausado');
        }

        if (element.classList.contains('zerar')) {
            clearInterval(timer);
            clock.innerHTML = '00:00:00';
            clock.classList.remove('pausado');
            seconds = 0;
        }
    });
}

watch();
