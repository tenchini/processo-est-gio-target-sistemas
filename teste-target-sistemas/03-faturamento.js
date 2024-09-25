// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const faturamento = require("./faturamento.json")
const valoresValidos = filtrarValoresValidos(faturamento.faturamento)

function filtrarValoresValidos(faturamento) {
    const valoresFaturamentoMensal = []

    for (const item of faturamento) {
        valoresFaturamentoMensal.push(item.valor)
    }

    const valoresValidos = valoresFaturamentoMensal.filter((valor) => valor > 0)

    return valoresValidos
}

function checarFaturamentoMensal(valoresValidos) {
    const menorValor = Math.min(...valoresValidos)
    const maiorValor = Math.max(...valoresValidos)
    const mediaFaturamento =
        valoresValidos.reduce((acc, valor) => acc + valor, 0) /
        valoresValidos.length
    const valoresAcimaDaMedia = valoresValidos.filter(
        (valor) => valor > mediaFaturamento
    ).length

    const formatarParaReal = (valor) =>
        (valor / 100).toFixed(2).replace(".", ",")

    console.log(
        `O menor valor de faturamento ocorrido em um dia do mês: R$${formatarParaReal(
            menorValor
        )}`
    )
    console.log(
        `O maior valor de faturamento ocorrido em um dia do mês: R$${formatarParaReal(
            maiorValor
        )}`
    )
    console.log(
        `Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${valoresAcimaDaMedia}`
    )
}

checarFaturamentoMensal(valoresValidos)
