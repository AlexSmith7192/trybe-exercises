n = 5;
for (let index = 0; index < n; index += 1) {
  let asterisco = '*'
  console.log(asterisco.repeat(n));
}

n = 5;
for (let index = 1; index <= n; index += 1) {
  let asterisco = '*'
  console.log(asterisco.repeat(index));
}

n = 5;
for (let index = 1; index <= n; index += 1) {
  let espaco = ' ';
  let asterisco = '*'
  console.log(espaco.repeat(n - index) + asterisco.repeat(index));
}
