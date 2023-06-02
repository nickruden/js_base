// Ex. 1 
let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', () => {

    let li = document.createElement('li');
    li.textContent = 'item';

    li.addEventListener('click', () => li.textContent += '!');

    elem.appendChild(li);
}); 
