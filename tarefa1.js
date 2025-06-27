
// Validação de Datas

function validarData(dia, mes, ano) {
    if (ano < 0 || mes < 1 || mes > 12 || dia < 1) {
        return false;
    }

    const diasMes = [
        31,
        (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0) ? 29 : 28,
        31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ];

    return dia <= diasMes[mes - 1];
}

// Exemplo de uso:
console.log(validarData(29, 2, 2024)); // true (ano bissexto)
console.log(validarData(30, 2, 2023)); // false


