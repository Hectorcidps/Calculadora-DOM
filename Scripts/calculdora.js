function sumar() {
    const num1 = parseFloat(document.getElementById('dato1').value);
    const num2 = parseFloat(document.getElementById('dato2').value);

    const resultado = num1 + num2;
    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
  }
  function restar() {
    const num1 = parseFloat(document.getElementById('dato1').value);
    const num2 = parseFloat(document.getElementById('dato2').value);

    const resultado = num1 - num2;
    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
  }

  function multiplicar() {
    const num1 = parseFloat(document.getElementById('dato1').value);
    const num2 = parseFloat(document.getElementById('dato2').value);

    const resultado = num1 * num2;
    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
  }

  function dividir() {
    const num1 = parseFloat(document.getElementById('dato1').value);
    const num2 = parseFloat(document.getElementById('dato2').value);

    const resultado = num1 / num2;
    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
  }