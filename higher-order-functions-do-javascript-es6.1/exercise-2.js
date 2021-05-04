const generateRandom = () => (Math.round(Math.random() * 5));

const result = (ap, res) => {
  if (ap === res()) {
    return `Parabéns você ganhou`;
  } else {
    return `Tente novamente`;
  }
}

console.log(result(5, generateRandom));
