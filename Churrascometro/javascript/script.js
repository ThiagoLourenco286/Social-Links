// Carne Mulheres = 300 gr , mas se passar de 6 horas 500 gr
// Carne Homem = 450 gr , mas se passar de 6 horas 700 gr
// Cerveja = Mulheres = 1000 ml , mas se passar de 6 horas 1500 ml
// Cerveja = Homem  = 1500 ml , mas se passar de 6 horas 2000 ml
// Refrigerante = Mulheres  = 1000  , mas se passar de 6 horas 1500  ml
// Refrigerante = Homem  = 1500 ml , mas se passar de 6 horas 2000 ml
// Agua = Homem / Mulher  = 1500 ml , mas se passar de 6 horas 2000 ml

const inputMulher = document.getElementById("Mulher");
const inputHomem = document.getElementById("Homem");
const inputCriancas = document.getElementById("Criancas");
const inputDuracao = document.getElementById("Duracao");
const resultado = document.getElementById("Resultado");

function calcularChurras() {

    let Mulheres = inputMulher.value;
    let Homem = inputHomem.value;
    let Criancas = inputCriancas.value;
    let Duracao = inputDuracao.value;

    let quantCarneMulherHomen = carnePM(Duracao) * Mulheres + carnePH(Duracao) * Homem + (carnePC(Duracao) / Criancas);
    let quantCervejaMulherHomen = cervejaPM(Duracao) * Mulheres + cervejaPM(Duracao) * Homem;
    let quantRefrigeranteMulherHomen = refrigerantePM(Duracao) * Mulheres + refrigerantePH(Duracao) * Homem + (refrigerantePC(Duracao) * Criancas);
    let quantAguaMulherHomen = aguaPMH(Duracao) * Mulheres + aguaPMH(Duracao) * Homem + (aguaPC(Duracao) * Criancas);

    resultado.innerHTML = ` <P class = "Carne position" > ${quantCarneMulherHomen / 1000} kg de Carne `
    resultado.innerHTML += ` <P class = "Latas position"> ${Math.ceil(quantCervejaMulherHomen / 350)} Latas de Cerveja `
    resultado.innerHTML += ` <P class = "Refrigerante position"> ${Math.ceil(quantRefrigeranteMulherHomen / 2000)} Garrafas de Refrigerante `
    resultado.innerHTML += ` <P class = "Agua position"> ${Math.ceil(quantAguaMulherHomen / 1500)} Garrafas D'agua `

    limparInput();
}

function limparInput() {
    document.getElementById("Mulher").value = "";
    document.getElementById("Homem").value = "";
    document.getElementById("Criancas").value = "";
    document.getElementById("Duracao").value = "";
}


function carnePM(Duracao) {
    if (Duracao >= 6)
        return 500
    else {
        return 300
    }
}

function carnePH(Duracao) {
    if (Duracao >= 6)
        return 700
    else {
        return 450
    }
}

function carnePC(Duracao) {
    if (Duracao > 6)
        return 400
    else {
        return 250
    }
}

function cervejaPM(Duracao) {
    if (Duracao >= 6)
        return 1500
    else {
        return 1000
    }
}

function cervejaPH(Duracao) {
    if (Duracao >= 6)
        return 2000
    else {
        return 1500
    }
}

function refrigerantePM(Duracao) {
    if (Duracao >= 6)
        return 1500
    else {
        return 1000
    }
}

function refrigerantePH(Duracao) {
    if (Duracao >= 6)
        return 1500
    else {
        return 1000
    }
}

function refrigerantePC(Duracao) {
    if (Duracao > 6)
        return 1000
    else {
        return 500
    }
}

function aguaPMH(Duracao) {
    if (Duracao >= 6)
        return 1500
    else {
        return 1000
    }
}

function aguaPC(Duracao) {
    if (Duracao > 6)
        return 1000
    else {
        return 500
    }
}