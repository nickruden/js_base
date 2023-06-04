// Ex. 1 
function appendText(elems, text) {
    for (let elem of elems) { 
        elem.innerHTML += text;
    };
};

let elems = document.querySelectorAll('#elem1');
appendText(elems, '!');


// Ex. 2 
function appendElem(elem, text) {
    let ul = elem.querySelector('ul');
    let li = document.createElement('li');

    li.textContent = text;
    ul.appendChild(li);
};

let div2 = document.querySelector('#div2');
appendElem(div2, 'text1');


// Ex. 3 
let arr = [1, 2, 3, 4, 5];
let div3 = document.querySelector('#div3');

for (let i of arr) {
    appendElem(div3, i);
}; 
