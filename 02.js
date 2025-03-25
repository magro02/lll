class Pessoa {
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
 
    calcularIMC() {
        let imc = this.peso / (this.altura * this.altura);
        return imc.toFixed(2);
    }
 
    classificarIMC() {
        let imc = this.calcularIMC();
        if (imc < 18.5) {
            return "Abaixo do peso.";
        } else if (imc < 24.9) {
            return "Peso normal.";
        } else if (imc < 29.9) {
            return "Sobrepeso.";
        } else if (imc < 34.9) {
            return "Obesidade Grau I.";
        } else if (imc < 39.9) {
            return "Obesidade Grau II.";
        } else {
            return "Obesidade Grau III (mórbida).";
        }
    }
 }

 const botaoCalcular = document.getElementById("calcular");
 const resultado = document.getElementById("resultado");
 
 botaoCalcular.addEventListener("click", () => {
    let nome = document.getElementById("nome").value;
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
 
    if (!nome || isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.textContent = "Por favor, preencha todos os campos corretamente.";
        return;
    }
 

    let pessoa = new Pessoa(nome, peso, altura);   
    resultado.textContent = `${pessoa.nome}, seu IMC é ${pessoa.calcularIMC()}. ${pessoa.classificarIMC()}`;
 });
