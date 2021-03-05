let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Primeira questão
for (let indexNumber = 0; indexNumber < numbers.length; indexNumber += 1) {
  console.log(numbers[indexNumber]);
}

//Segunda questão
let soma = 0;
for (let indexNumber = 0; indexNumber < numbers.length; indexNumber += 1) {
  soma = soma + numbers[indexNumber];
}
console.log(soma);

//Terceira questão
let arithmeticAverage = 0;
arithmeticAverage = soma / numbers.length;
//Quarta questão
if (arithmeticAverage >= 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor ou igual a 20')  
}

//Quinta questão
let larger = 0
for (let indexLarger = 0; indexLarger < numbers.length; indexLarger += 1) {
  if (numbers[indexLarger] > larger) {
    larger = numbers[[indexLarger]];
  }
}
console.log(larger);

//Sexta questão
let numbersOdd = 0
for (let indexOdd = 0; indexOdd < numbers.length; indexOdd += 1) {
  if ((numbers[indexOdd] % 2) != 0) {
    numbersOdd += 1;
  }
}

if (numbersOdd === 0) {
  console.log('nenhum valor ímpar encontrado')
} else {
  console.log(numbersOdd);
}


