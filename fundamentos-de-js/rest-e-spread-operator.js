/* spread operator */

const aluno = {
    nome: "Fernando",
    idade: 19,
    cursos: ["Node", "SQL", "Docker"],
    email: "fernando@gmail.com",
    endereco: "Rua Qualquer uma",
    telefone: "7376376783883"
};

console.log({ aluno });

const alunoAtualizado = {
    nome: aluno.nome,
    cursos: aluno.cursos,
    idade: 20,
    email: aluno.email,
    endereco: aluno.endereco,
    telefone: aluno.telefone,
};

console.log(alunoAtualizado);


// usando o spread operator ...
const alunoAtualizado2 = {
    ...aluno,
    idade: 20,
    cursos: [...aluno.cursos, "Java"],
};

console.log(alunoAtualizado2);

/*

{
  nome: 'Fernando',
  idade: 20,
  cursos: [ 'Node', 'SQL', 'Docker', 'Java' ],
  email: 'fernando@gmail.com',
  endereco: 'Rua Qualquer uma',
  telefone: '7376376783883'
}

*/



/* rest operator */

const { endereco, email, ...resto } = aluno;
console.log(endereco); // Rua Qualquer uma

console.log(resto);
/* tudo menos o endereco e email

{
nome: 'Fernando',
idade: 19,
cursos: [ 'Node', 'SQL', 'Docker' ],
telefone: '77373889190923'
}

 */

const nomes = [ "João", "Sandra", "Andreia"];

const [primeiro, ...restoArray] = nomes;
console.log(primeiro); // João

console.log(restoArray); // [ 'Sandra', 'Andreia' ]