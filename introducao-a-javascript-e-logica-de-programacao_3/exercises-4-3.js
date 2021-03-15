//Questão 1
n = 5;
for (let index = 0; index < n; index += 1) {
  let asterisco = '*'
  console.log(asterisco.repeat(n));
}

//Questão 2
n = 5;
for (let index = 1; index <= n; index += 1) {
  let asterisco = '*'
  console.log(asterisco.repeat(index));
}

//Questão 3
n = 5;
for (let index = 1; index <= n; index += 1) {
  let espaco = ' ';
  let asterisco = '*'
  console.log(espaco.repeat(n - index) + asterisco.repeat(index));
}

//Questão 4
//Código copiado do gabarito disponivel no course
let n = 5;
let symbol = '*';
let inputLine = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
};