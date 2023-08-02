interface Transporte {
    tipo: string
    descricao: string 
    tamanho: number
}

interface Aereo extends Transporte {
    servicoDeBordo: string
}

interface Rodoviario extends Transporte {
    paradas: number
    numeroDoLugar: number 
}

function cadastroTransporte(transporte: Transporte) {
    console.log('Transporte: ' + JSON.stringify(transporte));
}

const aviao: Aereo = {
    tipo: 'aereo',
    descricao: 'Transporte para longas viagens',
    tamanho: 50,
    servicoDeBordo: 'Possui serviço de bordo'
}

const onibus: Rodoviario = {
    tipo: 'rodoviario',
    descricao: 'Serviço rodoviário',
    tamanho: 12,
    numeroDoLugar: 40,
    paradas: 4
}

cadastroTransporte(aviao);
console.log("================");
cadastroTransporte(onibus);
