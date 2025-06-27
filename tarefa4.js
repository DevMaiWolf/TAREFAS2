// Fatorial Recursivo

function fatorial(escolhido) {
    if (escolhido < 0) {
        throw new Error("O número deve ser não negativo.");
    }
    if (escolhido === 0) {
        return 1;
    }
    return escolhido * fatorial(escolhido - 1);
}

console.log(fatorial(5)); // Exemplo de uso


// Sem verificação de tipo
