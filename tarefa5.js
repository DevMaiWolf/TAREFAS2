// Debounce

function debounce(fn, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId); // Cancela o timer anterior
        timeoutId = setTimeout(() => {
            fn.apply(this, args); // Executa a função com o contexto correto e os mesmos argumentos
        }, delay);
    };
}

function logTexto(texto) {
    console.log("Digitado:", texto);
}

const debouncedLog = debounce(logTexto, 1000);

// Exemplo de digitação

debouncedLog("a");
debouncedLog("ab");
debouncedLog("abc");

// Apenas "abc" será impresso após 1 segundo sem novas chamadas
