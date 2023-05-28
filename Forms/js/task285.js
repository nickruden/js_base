// Ex. 1 
let elem = document.querySelector('#elem');
let textarea = document.querySelector('textarea');

textarea.addEventListener('blur', () => elem.innerHTML = textarea.value); 
