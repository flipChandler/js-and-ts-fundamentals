
/* criação de objeto */

// new Object();

var caneta = new Object();
caneta.cor = "Azul";
caneta.marca = "Bic";
caneta.dimensao = "6 mm";

var canetaPreta = new Object();
canetaPreta.cor = "Preta";
canetaPreta.marca = "Bic";
canetaPreta.dimensao = "8 mm";

console.log(caneta);
console.log(canetaPreta);

// objeto utilizando function

function Caneta(cor, marca, dimensao) {
    this.cor = cor;
    this.marca = marca;
    this.dimensao = dimensao;
}

var novaCanetaPreta = new Caneta("Preta", "Bic", "10 mm");
console.log(novaCanetaPreta);

// criar objeto direto
const novaCanetaRosa = {
    cor: "Rosa",
    marca: "Bic",
    dimensao: "6 mm"
};