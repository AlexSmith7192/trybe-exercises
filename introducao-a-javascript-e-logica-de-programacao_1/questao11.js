let salarioBruto = 3000.00;
let salarioDescontoInss;
let salarioLiquido;

if (salarioBruto <= 0) {
  console.log('Valor inválido')
} else if (salarioBruto > 0 && salarioBruto <= 1556.94) {
  salarioDescontoInss = (salarioBruto - (salarioBruto * 0.08));
}  else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  salarioDescontoInss = (salarioBruto - (salarioBruto * 0.09));
}  else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
  salarioDescontoInss = (salarioBruto - (salarioBruto * 0.11));
}  else if (salarioBruto > 5189.82) {
  salarioDescontoInss = (salarioBruto - 570.88);
}


if (salarioDescontoInss <= 0) {
  console.log('Valor inválido');

} else if (salarioDescontoInss > 0 && salarioDescontoInss <= 1903.98) {
  salarioLiquido = salarioDescontoInss;

} else if (salarioDescontoInss > 1903.98 && salarioDescontoInss <= 2826.65) {
  let ir = ((salarioDescontoInss * 0.075) - 142.8);
  salarioLiquido = (salarioDescontoInss - ir);

} else if (salarioDescontoInss > 2826.65 && salarioDescontoInss <= 3751.06) {
  let ir = ((salarioDescontoInss * 0.15) - 354.8);
  salarioLiquido = (salarioDescontoInss - ir);
  
} else if (salarioDescontoInss > 3751.06 && salarioDescontoInss <= 4664.68) {
  let ir = ((salarioDescontoInss * 0.225) - 636.13);
  salarioLiquido = (salarioDescontoInss - ir);

} else if (salarioDescontoInss > 4664.68) {
  let ir = ((salarioDescontoInss * 0.275) - 869.36);
  salarioLiquido = (salarioDescontoInss - ir);
}

console.log(salarioDescontoInss)
console.log(salarioLiquido)
