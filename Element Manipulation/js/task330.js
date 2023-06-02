// Ex. 1 
let ul = document.querySelector('ul');
let li1 = ul.querySelectorAll('li');

for (let i of li1) {
    i.addEventListener('click', () => i.remove());
};


// Ex. 2 
let parent = document.querySelector('#parent');
let button = document.querySelector('#button');

button.addEventListener('click', () => {
    parent.lastChild.remove();
}); 
