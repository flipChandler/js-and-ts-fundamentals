/* callback */

// buscar dados do usuário

// chamar uma função para validar a idade

function buscarUsuario(callback) {

    // banco de dados
    const usuario = {
        id: 1,
        nome: "Maria",
        idade: 18,
    };

    callback(usuario);
}

function calcularIdade(usuario) {
    if (usuario.idade >= 18) {
        console.log("Usuário maior de idade");
    } else {
        console.log("Usuário menor de idade");
    }
}

buscarUsuario(calcularIdade);
