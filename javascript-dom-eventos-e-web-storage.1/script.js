const tagP = document.getElementsByTagName('p');
const mainContent = document.getElementsByClassName('main-content');
const centerContent = document.getElementsByClassName('center-content');
const tagH1 = document.getElementsByTagName('h1');

let texto = 'Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi! Delegadis gente finis, bibendum egestas augue arcu ut est. Mé faiz elementum girarzis, nisi eros vermeio. Quem num gosta di mim que vai caçá sua turmis!'

function textP (pos, text) {
  tagP[pos].innerText = text.toUpperCase();  
}

textP(0, texto);

function mudarCorMain () {
  mainContent[0].style.backgroundColor = 'rgb(76,164,109)';
}

mudarCorMain();

function mudarCorCenter () {
  centerContent[0].style.backgroundColor = 'white';
}

mudarCorCenter();

function textH1 (pos, textH1) {
  tagH1[pos].innerText = textH1;  
}

textH1(0, 'Exercício 5.1 - JavaScript');

function consoleP () {
  for (let indexP = 0; indexP < tagP.length; indexP += 1) {
    console.log(tagP[indexP].innerText);
  }
}

consoleP();
