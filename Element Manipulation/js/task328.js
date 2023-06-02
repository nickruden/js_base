// Ex. 1 
let elem = document.querySelector('#elem');

for (let i = 1; i < 11; i++) {
    let li = document.createElement('li');
    li.textContent = 'item' + i;

    elem.appendChild(li);
}; 
