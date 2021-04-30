const datasPerson = (fullName) => {
  const fullLower = fullName.toLowerCase().replace(/ /g, '');
  const datas = {fullName, email: `${fullLower}@trybe.com`}
  return datas;
};

const newEmployees = (p) => {
  const employees = {
    id1: p('Pedro Guerra'),
    id2: p('Luisa Drumond'),
    id3: p('Carla Paiva')
  };
  return employees;
};

console.log(newEmployees(datasPerson));
