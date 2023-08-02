/* desestruturação */


const pessoa = {
    nome: "Carol",
    idade: 19,
    documento: "747878389923",
    instagram: "carol12.e"
};

const dados = { nome, idade } = pessoa;

console.log(dados.nome, dados.idade);

const { nome: nomeDaPessoa } = pessoa;

console.log(nomeDaPessoa);

/* spread operator ... */

const aluno = {
    nome: "Fernando",
    idade: 19,
    cursos: ["Node", "SQL", "Docker"],
    email: "fernando@gmail.com",
    endereco: "Rua Qualquer uma",
    telefone: "77373889190923",
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

console.log({ alunoAtualizado });

// muito mais clean
const alunoAtualizado2 = {
    ...aluno,
    idade: 20, // tem que colocar sempre depois do objeto (aluno)
    cursos: [... aluno.cursos, "Java"],
};

console.log({ alunoAtualizado2 })

/**
 * {
  alunoAtualizado2: {
    nome: 'Fernando',
    idade: 20,
    cursos: [ 'Node', 'SQL', 'Docker', 'Java' ],
    email: 'fernando@gmail.com',
    endereco: 'Rua Qualquer uma',
    telefone: '77373889190923'
  }
 */
