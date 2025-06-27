// Mapeamento e Ordenação

function mapeamentoEOrdenacao(produtos) {
    return [...produtos] 
        .sort((a, b) => a.preco - b.preco) 
        .map(produto => produto.nome);  
}


// Exemplo de uso:
const produtos = [
    { nome: "Produto A", preco: 30 },
    { nome: "Produto B", preco: 20 },
    { nome: "Produto C", preco: 50 }
];

console.log(mapeamentoEOrdenacao(produtos)); // ["Produto B", "Produto A", "Produto C"]
