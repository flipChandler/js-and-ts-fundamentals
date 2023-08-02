type PessoaType = {
    nome: string,
    idade: number,
    email: string,
    usuario: string,
    password?: string
}

// & é a intersecçao
type Funcionario = PessoaType & {
    salario: number,
    comissao: number,
    tipo: "funcionario"
}

type Gerente = PessoaType & {
    plr: number,
    cartaoDeCredito: string,
    tipo: "gerente"
}

// | é UNION
function cadastroDePessoa(pessoa: Funcionario | Gerente) {
   if (pessoa.tipo == 'funcionario') {
    console.log('Funcionário:' + JSON.stringify(pessoa));
   } else {
    console.log('Gerente:' + JSON.stringify(pessoa));
   }
}

const novaPessoa: PessoaType = {
    nome: "Felipe",
    usuario: "felipe",
    idade: 36,
    email: "felipe.santos@gmail.com"
}

const novoFuncionario: Funcionario = {
    nome: "Billie Jean",
    usuario: "billie",
    idade: 23,
    email: "billie@gmail.com",
    salario: 10500,
    comissao: 12,
    tipo: "funcionario"
}

const novoGerente: Gerente = {
    nome: "James Brown",
    usuario: "james",
    idade: 78,
    email: "james@gmail.com",
    plr: 7000,
    cartaoDeCredito: "51555s5s553",
    tipo: "gerente"
}

cadastroDePessoa(novoFuncionario);
console.log("====================");
cadastroDePessoa(novoGerente);
