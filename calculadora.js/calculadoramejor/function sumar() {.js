function sumar() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const resultado = numero1 + numero2;
    document.getElementById('resultado').textContent = resultado;
}

function restar() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const resultado = numero1 - numero2;
    document.getElementById('resultado').textContent = resultado;
}

function multiplicar() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const resultado = numero1 * numero2;
    document.getElementById('resultado').textContent = resultado;
}

function dividir() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    if (numero2 !== 0) {
        const resultado = numero1 / numero2;
        document.getElementById('resultado').textContent = resultado;
    } else {
        document.getElementById('resultado').textContent = "No se puede dividir por cero";
    }
}

function encontrarMayor() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const resultado = numero1 > numero2 ? numero1 : numero2;
    document.getElementById('resultado').textContent = `El número mayor es: ${resultado}`;
}
