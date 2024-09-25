// 1)	Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

function somar() {
    const INDICE = 13
    let SOMA = 0,
        K = 0

    while (K < INDICE) {
        K += 1
        SOMA += K
    }

    console.log(SOMA) // 91
}

somar()

// Esse código tem a função de calcular a soma de todos os números de 1 a 13.
// Para isso, ele utiliza um loop que começa em 0 e vai até 12, aumentando a variável K a cada passagem e somando o valor de K à variável SOMA.
// No final desse processo, o resultado de SOMA é 91, que é a soma de todos os números inteiros de 1 a 13.
