// Ex. 1 
let elem = document.querySelector('#elem');
let p = document.querySelector('#p');

for (let i = 1; i < 6; i++) {
    let inp = document.createElement('input');
    inp.value = 'text' + i;

    inp.addEventListener('blur', () => p.innerHTML = inp.value);

    elem.appendChild(inp);
}; 
