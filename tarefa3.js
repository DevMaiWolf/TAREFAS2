// Palavras Únicas

function unique(frase) {
    const palavras = frase.split(" ");
    const unicas = [];

    for (let only = 0; only < palavras.length; only++) {
        if (!unicas.includes(palavras[only])) {
            unicas.push(palavras[only]);
        }
    }

    return unicas;
}

console.log(unique("olá olá Prof Prof")); // ["olá", "Prof"]
// Sem controle sob pontuação e letras maiúsculas, senão usaria: toLowerCase().replace e set só que deu uns erros e estou revendo sobre a ordem.
