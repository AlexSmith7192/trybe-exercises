let pecaXadrez = 'REI'

let mini = pecaXadrez.toLowerCase()

switch (mini) {
  case 'rei':
    console.log('Todos os lados');
    break
  case 'rainha':
    console.log('Horizontal, vertical e diagonal');
    break
  case 'bispo':
    console.log('Diagonal');
    break
  case 'cavalo':
    console.log('Em L');
    break
  case 'torre':
    console.log('Vertical e horizontal');
    break
  case 'peao':
    console.log('Frente');
    break
  default:
    console.log('Valor inválido');
}
