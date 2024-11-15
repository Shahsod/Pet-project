// Создать div

const div = document.createElement('div');

// Добавить к нему кдасс wrapper

div.classList.add('wrapper');

// Поместить его внутрь тега body

const body = document.querySelector('body');

body.appendChild(div);

// Создать заголовок h1 "DOM (Document Object Model)"

const header = document.createElement('h1');
header.textContent = 'DOM (Document Object Model)';

// Добавить h1 перед DIV с классом wrapper 

div.insertAdjacentElement('beforebegin', header);

// Создать список ul
// Добавить в него 3 элемента с текстом "один, два, три"

const ul = `
    <ul>
        <li>Один</li>
        <li>Два</li>
        <li>Три</li>
    </ul>
`;

// Поместить список внутрь элемента  классом wrapper

div.innerHTML = ul;

// Создать изображение 

const img = document.createElement('img');

// Добавить следующие свойства к изображению 
// Добавить атрибут source

img.src = 'https://i.pinimg.com/originals/ba/bd/6d/babd6d37eb2dd965c7f1dfb516d54094.jpg';

// Добавить атрибут width со значением 240

img.width = 240;

// Добавить класс super

img.classList.add('super');

// Добавить свойство alt со значением "Super Man"

img.alt = 'Super';

// Поместить изображение внутрь элемента с классом wrapper

div.appendChild(img);

// Используя HTML строку, создать div с классом 'pDiv'+ c 2-мя параграфами

const elemHtml = `
    <div class='pDiv'>
        <p>Параграф 1</p>
        <p>Параграф 2</p>
    </div>
`

// Поместить этот div до элемента ul

const ulList = div.querySelector('ul');
ulList.insertAdjacentHTML('beforebegin', elemHtml);


// Добавить для 2-го параграфа класс text
const pDiv = document.querySelector('pDiv');
pDiv.children[1] = classList.add('text');

// Удалить 1-й параграф  
pDiv.firstElementChild.remove();