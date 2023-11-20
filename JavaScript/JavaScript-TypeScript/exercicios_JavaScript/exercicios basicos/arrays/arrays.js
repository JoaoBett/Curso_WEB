const alunos = ['Joao', 'Maria', 'Tiago'];

console.log(alunos.slice(0,2)) // mostra os primeiros 2 indices 0 e 1

delete alunos[1]; // delete no index pretendido

const removidoPrimeiro = alunos.shift(); // retira o primeiro

const removidoUltimo = alunos.pop(); // retira o ultimo
console.log(removidoUltimo);

const removido = alunos.unshift(); // retira o ultimo

alunos.unshift('Marta'); // adiciona no inicio

alunos.push('Marta'); //Adiciona no final

alunos[alunos.length] = 'Luiza'; //Adiciona no final