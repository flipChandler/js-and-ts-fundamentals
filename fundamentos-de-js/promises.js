// promises - async / await || then em try / catch

console.log("Primeira mensagem");

setTimeout(() => {
    console.log("Segunda mensagem");
}, 1000);


console.log("Terceira mensagem");

/*

Primeira mensagem
Terceira mensagem
Segunda mensagem

*/

/*

console.log("Primeira mensagem");

const segundaMensagem = aguardarSetTimeout();
console.log(segundaMensagem);

console.log("Terceira mensagem");

*/

function aguardarSetTimeout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Segunda mensagem");
        }, 1000);
    });
}


async function executar() {
    console.log("Primeira mensagem");

    const segundaMensagem = await aguardarSetTimeout();
    console.log(segundaMensagem);

    console.log("Terceira mensagem");
}

executar();

/* 

Primeira mensagem
Segunda mensagem
Terceira mensagem

*/

// outra forma com then


