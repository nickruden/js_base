// Ex. 1 
let elem1 = document.querySelector('#elem1');

let li1 = document.createElement('li');
li1.textContent = 'item';

elem1.appendChild(li1);


// Ex. 2 
let elem2 = document.querySelector('#elem2');
let button2 = document.querySelector('#button2');

button2.addEventListener('click', () => {

    let li = document.createElement('li');
    li.textContent = 'item';

    elem2.appendChild(li);
}); 
