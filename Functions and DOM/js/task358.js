// Ex. 1 
function appendText(elem, text) {
    elem.innerHTML += text;
};

let elem1_1 = document.querySelector('#elem1_1');
appendText(elem1_1, '!');

let elem1_2 = document.querySelector('#elem1_2');
appendText(elem1_2, '.');


// Ex. 2 
let elems = document.querySelectorAll('#elem2');

for (let elem of elems) {
    appendText(elem, '!');
};


// Ex. 3 
function setValue(inp, text) {
    inp.value = text;
};

let inp = document.querySelector('#inp');
setValue(inp, 'input3'); 
