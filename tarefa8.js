// Agrupamento por Propriedade - com reduce

function agrupamentoPorPropriedade(vendas) {
    return vendas.reduce((acc, venda) => {
        if (!acc[venda.cliente]) {
            acc[venda.cliente] = 0;
        }
        acc[venda.cliente] += venda.total;
        return acc;
    }, {});
}

// Exemplo de uso:
const vendas = [
    { cliente: "João", total: 100 },
    { cliente: "Maria", total: 200 },
    { cliente: "João", total: 150 }
];

console.log(agrupamentoPorPropriedade(vendas)); // { João: 250, Maria: 200 }
