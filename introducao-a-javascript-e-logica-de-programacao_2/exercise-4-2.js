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
arithmeticAverage = soma / numbers.length
console.log(arithmeticAverage);
