const selectState = document.getElementById('state');
const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']

function generateOptionStates() {
  for (let indexState = 0; indexState < states.length; indexState += 1) {
    const option = document.createElement('option');
    option.innerText = states[indexState];
    selectState.appendChild(option);
  }
}

generateOptionStates();