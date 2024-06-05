function calcularIMC() {

    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    
    const imc = peso / (altura * altura);

    let resultado = '';

    if (imc < 18.5) {
        resultado = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        resultado = 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        resultado = 'Obesidade grau I';
    } else if (imc >= 35 && imc < 39.9) {
        resultado = 'Obesidade grau II';
    } else if (imc >= 40) {
        resultado = 'Obesidade grau III';
    }

    document.getElementById('resultado').innerText = `Seu IMC é ${imc.toFixed(2)} - ${resultado}`;

    }
