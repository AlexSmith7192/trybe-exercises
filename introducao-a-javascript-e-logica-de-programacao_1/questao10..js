let valorCusto = 100;
let valorCustoTotal = (valorCusto + (valorCusto * 0.2));
let valorVenda = (valorCustoTotal + (valorCustoTotal * 0.3));
let quantVendidos = 1000;
let lucro;

if ((valorCusto < 0) || (quantVendidos < 0)) {
  console.log('Valor inválido, tente novamente!');
} else if (valorCusto >= 0) {
  lucro = ((valorVenda - valorCustoTotal) * quantVendidos);

  console.log('O lucro total das vendas foi = R$', lucro)
} else {
  console.log('Apenas números são aceitos');
}