function verificaPalindromo (palavra) {
  let res = palavra.split('').reverse('').join('')
  if (res === palavra) {
    return true;
  }
  if (res != palavra) {
    return false;
  }
}

function indiceMaiorNumero (arrayNumbers) {
  let maior = 0;
  let indice = 0;
  for (let indexNumbers = 0; indexNumbers < arrayNumbers.length; indexNumbers += 1) {
    if (arrayNumbers[indexNumbers] > maior) {
      maior = arrayNumbers[indexNumbers];
      indice = indexNumbers;
    }
  }
  return indice;;
}
