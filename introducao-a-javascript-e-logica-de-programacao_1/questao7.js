let notaPorcentagem = 101;
let notaConceito;

if (notaPorcentagem >= 90 && notaPorcentagem <= 100) {
  notaConceito = 'A';
} else if (notaPorcentagem >= 80 && notaPorcentagem < 90) {
  notaConceito = 'B';
} else if (notaPorcentagem >= 70 && notaPorcentagem < 80) {
  notaConceito = 'C';
} else if (notaPorcentagem >= 60 && notaPorcentagem < 70) {
  notaConceito = 'D';
} else if (notaPorcentagem >= 50 && notaPorcentagem < 60) {
  notaConceito = 'E';
} else if (notaPorcentagem < 50 && notaPorcentagem >= 0) {
  notaConceito = 'F';
} else if (notaPorcentagem > 100 || notaPorcentagem < 0) {
  console.log('Valor inválido')
} else {
  console.log('Caractere inválido')
}
