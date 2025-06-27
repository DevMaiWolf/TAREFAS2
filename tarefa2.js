// Jogo de Adivinhação

function adivinha() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let palpite;
    let tentativas = 0;

    while (palpite !== numeroSecreto) {
        palpite = parseInt(prompt("Adivinhe um número entre 1 e 100:"));
        tentativas++;
        
        if (palpite < numeroSecreto) {
            console.log("Mais alto!");
        } else if (palpite > numeroSecreto) {
            console.log("Mais baixo!");
        } else {
            console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
        }
    }
}
adivinha();
