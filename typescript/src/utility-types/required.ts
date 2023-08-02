interface Video {
    nome: string 
    duracao?: number 
    categoria?: string 
    descricao: string
}

// Required, até os atributos opcionais se tornam obrigatorios
function cadastrVideo(video: Required<Video>) {
    console.log({ video })
}

cadastrVideo({
    nome: 'Eu, eu mesmo e Irene',
    categoria: 'comedia',
    descricao: 'Jim Carrey e ele mesmo',
    duracao: 120
})