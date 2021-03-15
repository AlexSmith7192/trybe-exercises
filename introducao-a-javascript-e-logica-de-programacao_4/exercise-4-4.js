let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: 'Sim',
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: 'Sim',
};


console.log('Bem vinda, ' + info.personagem);

console.log(info)

for (keyInfo in info) {
  console.log(keyInfo);
}

for (indexInfo in info) {
  console.log(info[indexInfo])
}

for (indexInfo in info) {
  if (info[indexInfo] === info2[indexInfo]) {
    console.log(info[indexInfo]);
  }
  if (info[indexInfo] != info2[indexInfo]) {
    console.log(info[indexInfo],'e',info2[indexInfo]);
  }
}
