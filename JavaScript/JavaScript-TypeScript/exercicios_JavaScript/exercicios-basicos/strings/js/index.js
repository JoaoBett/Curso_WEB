const nome = prompt('Digite o seu nome completo:');

document.body.innerHTML += `O seu nome é ${nome} <br />`
document.body.innerHTML += `Seu nome tem ${nome.length} <br />`
document.body.innerHTML += `a segunda letra do seu nome é : ${nome[3]} <br />`
document.body.innerHTML += `Qual o primeiro indice da letra a no seu nome? ${nome.indexOf('a')} <br />`
document.body.innerHTML += `Qual o ultimo indice da letra a no seu nome? ${nome.lastIndexOf('a')} <br />`
document.body.innerHTML += `As ultimas 3 letras do seu nome são <strong>${nome.slice(-3)}</strong> <br />`
document.body.innerHTML += `As palavras do seu nome são:  <strong>${nome.split(' ')}</strong> <br />`
document.body.innerHTML += `Seu nome com letras maiusculas <strong>${nome.toUpperCase()}</strong> <br />`
document.body.innerHTML += `Seu nome com letras minusculas <strong>${nome.toLowerCase()}</strong> <br />`