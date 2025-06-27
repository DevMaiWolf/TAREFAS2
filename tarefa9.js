// Conversão Entre Formatos - pares to objetos and objetos to pares

function paresParaObjeto(pares) {
    return pares.reduce((acc, [chave, valor]) => {
        acc[chave] = valor;
        return acc;
    }, {});
}

function objetoParaPares(obj) {
    return Object.entries(obj);
}

// Exemplo de uso:
const pares = [["nome", "João"], ["idade", 30]];
const obj = paresParaObjeto(pares);
console.log(obj); // { nome: "João", idade: 30 }

const novoPares = objetoParaPares(obj);
console.log(novoPares); // [["nome", "João"], ["idade", 30]]
