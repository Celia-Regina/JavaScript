const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = +document.getElementById('altura').value;
    const peso = +document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
//funcao
//se tudo tiver preenchido faca
    if (nome !== '' && altura !== '' && peso !== '') { //diferente de vazio

        const valorIMC = (peso / (altura * altura)).toFixed(1);//toFixed -> deixar apenas 1 casa decimal

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;//texto apresentado na tela
        //se nao tiver preenchido
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}
//assim que clicar fazer a conta e chamar a funcao
calcular.addEventListener('click', imc);