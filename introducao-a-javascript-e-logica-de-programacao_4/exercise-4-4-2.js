function verificaPalindromo (palavra) {
  let res = palavra.split('').reverse('').join('')
  if (res === palavra) {
    return true;
  }
  if (res != palavra) {
    return false;
  }
}
