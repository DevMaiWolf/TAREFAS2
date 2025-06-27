// Memoization para objetos simples (essa deu bailee só com pesquisa consegui)

function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const resultado = fn.apply(this, args);
        cache[key] = resultado;
        return resultado;
    };
}

// Usa a função memoizada dentro dela mesma 
let memoFatorial;
memoFatorial = memoize(function(n) {
    if (n === 0) return 1;
    return n * memoFatorial(n - 1);
});

console.log(memoFatorial(5)); // Calcula e armazena
console.log(memoFatorial(5)); // Retorna do cache
