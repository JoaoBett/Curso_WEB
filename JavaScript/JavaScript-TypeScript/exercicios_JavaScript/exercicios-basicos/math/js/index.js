const num = Number(prompt("Digite um numero:"));
const numTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numTitulo.innerHTML = num;

texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(num)}</p>`;
texto.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(num)}</p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(num)}</p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(num)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais ${Math.round(num)}</p>`;