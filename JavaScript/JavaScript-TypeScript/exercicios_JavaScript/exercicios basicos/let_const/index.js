const nome = "Joao";
const sobrenome = "Bett";
const idade = 21;
const peso = 85;
const altura = 1.8;
let imc; //peso / (altura*altura)
let anoNascimento;

imc = peso /(altura*altura);
anoNascimento = 2023 - idade;

console.log(nome + ' ' + sobrenome, "tem" + ' ' + idade  + ' ' + "anos, pesa" + ' ' + peso + ' ' +"kg"); // para separar as variaveis da string, colocar + (C#)
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`); // colocar um acento agudo para abrir e usar ${} e colocar a variavel dentro (PHP)
console.log(nome, "nasceu em", anoNascimento,".");// pode ser feito com virgulas (C)