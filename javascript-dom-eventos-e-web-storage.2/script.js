const bodyJS = document.querySelector('body');

function createTag(nameTag, nameClass) {
    const tag = document.createElement(nameTag);
    tag.classList = (nameClass);
    return tag;
}

const h1Body = bodyJS.appendChild(createTag('h1', 'title'));
h1Body.innerText = 'Exercício 5.2 - JavaScript DOM';

bodyJS.appendChild(createTag('div', 'main-content'));

const divMain = document.querySelector('div');
divMain.appendChild(createTag('div', 'center-content'));

divMain.firstChild.appendChild(createTag('p', '')).innerText = 'Alguma coisa!';

const divLeft = divMain.appendChild(createTag('div', 'left-content'));

const divRight = divMain.appendChild(createTag('div', 'right-content'));

const imgDivLeftContent = divMain.firstChild.nextSibling.appendChild(createTag('img', 'small-image'));
imgDivLeftContent.src = 'https://picsum.photos/200';

const olDivRightContent = divMain.lastChild.appendChild(createTag('ul', ''));

let numbers = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for (let indexOl = 0; indexOl < numbers.length; indexOl += 1) {
    let li = olDivRightContent.appendChild(createTag('li', ''));
    li.innerText = numbers[indexOl].toUpperCase();
}

for (let indexH3 = 1; indexH3 < 4; indexH3 += 1) {
    divMain.appendChild(createTag('h3', 'description'));
}

divMain.removeChild(divLeft);

divRight.style.marginRight = 'auto';

divMain.style.backgroundColor = 'green';

for (let indexRe = 1; indexRe < 3; indexRe += 1) {
    olDivRightContent.removeChild(olDivRightContent.lastChild);
}