interface Usuario {
    nome: string
    username: string
    email: string
}

// Partial
function atualizarUsuario(dadosDoUsuario: Partial<Usuario>) {
    console.log({ dadosDoUsuario })
}

atualizarUsuario({
    nome: 'Felipe',
    username: 'flip'
})