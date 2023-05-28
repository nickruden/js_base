// Ex. 1 
let elems = document.querySelector('#elem');

for (let elem of elems) {
    elem.innerHTML += elem.value;
}; 
