function relogio(){
    const timer = document.querySelector('.timer');
    let segundos = 0;
    let time;

    function iniciaTimer(){
        time = setInterval(function(){
            segundos++;
            timer.innerHTML = criaHoraSegundos(segundos);
        },1000)
    }

    function criaHoraSegundos(segundos){
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-PT',{
            hour12: false,
            timeZone: 'UTC'
        })
    }

    document.addEventListener('click' ,function(e){
        const el = e.target;

        if (el.classList.contains('zerar')){
            clearInterval(time);
            timer.innerHTML = '00:00:00';
            timer.style.color = '#000000';
            timer.classList.remove('pausado');
            segundos = 0;
        }

        if (el.classList.contains('iniciar')){
            timer.classList.remove('pausado');
            clearInterval(time);
            timer.style.color = '#000000';
            iniciaTimer();
        }

        if (el.classList.contains('pausar')){
            timer.style.color = '#FF0000';
            clearInterval(time);
        }
    })
}

relogio();