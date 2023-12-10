
//Capturar o formulario
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();//prevenir formulario ser automaticamente enviado
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    //se o peso nao for valida
    if (!peso){//se o peso for NaN
        setResultado('Peso Invalido', false);
        return;
    }

    //se a altura nao for valida
    if(!altura){
        setResultado('Altura Invalida', false);
        return;
    }
    
    const imc = getIMC(peso, altura);
    const nivelIMC = getNivelIMC(imc);

    const msg = `Seu IMC é ${imc} (${nivelIMC})`;

    setResultado(msg, true);
});

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML='';

    
    const p = criaP();
    
    if(isValid){
        p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
};

function criaP(){
    const p = document.createElement('p');
    return p;
}

function getIMC(peso, altura){
    const imc = peso/altura**2;
    return imc.toFixed(2);
}

function getNivelIMC(imc)
{
    const nivel = ['Abaixo do peso',
                    'Peso normal',
                    'Sobrepeso',
                    'Obesidade grau 1',
                    'Obesidade grau 2',
                    'Obesidade grau 3',];

    if(imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];
    if(imc >= 24.9) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    if(imc < 18.5) return nivel[0];
}