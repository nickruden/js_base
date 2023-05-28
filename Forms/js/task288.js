// Ex. 2 
let elem = document.querySelector('#elem');
let btn = document.querySelector('#btn');

btn.addEventListener('click', () => elem.checked = !elem.checked); 
