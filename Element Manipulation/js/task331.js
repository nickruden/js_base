// Ex. 1 
let elem1 = document.querySelector('#elem1');
let li1_1 = document.createElement('li');
li1_1.textContent = 'start'
let li1_2 = document.createElement('li');
li1_2.textContent = 'finish';

elem1.prepend(li1_1);
elem1.append(li1_2);


// Ex. 2, 3 
let parent = document.querySelector('#parent');
let elem2 = document.querySelector('#elem2');

let li2 = document.createElement('li');
li2.textContent = 'new';
li2.addEventListener('click', () => li2.textContent += '!');

parent.insertBefore(li2, elem2); 
