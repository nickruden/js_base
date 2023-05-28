// Ex. 1 
let elem1 = document.querySelector('#elem1');
console.log(elem1.lastChild);
console.log(elem1.lastElementChild);


// Ex. 2 
let elem2 = document.querySelector('#elem2');
console.log(elem2.nextSibling);
console.log(elem2.nextElementSibling);


// Ex. 3 
let elem3 = document.querySelector('#elem3');
console.log(elem3.previousSibling);
console.log(elem3.previousElementSibling);


// Ex. 4 
let elem4 = document.querySelector('#elem4');

for (let i of elem4.childNodes) {
    console.log(i);
};


// Ex. 5 
let elem5 = document.querySelector('#elem5');

for (let i of elem5.childNodes) {
    console.log(i.nodeName);
};


// Ex. 6 
let elem6 = document.querySelector('#elem6');

for (let i of elem6.childNodes) {
    if (i.nodeType == 1 || i.nodeType == 3) {
        console.log(i);
    };
};


// Ex. 7 
let elem7 = document.querySelector('#elem7');

for (let i of elem7.childNodes) {
    console.log(i.textContent);
};


// Ex. 8 
let elem8 = document.querySelector('#elem8');

for (let i of elem8.childNodes) {
    console.log(i.data);
};


// Ex. 9 
let elem9 = document.querySelector('#elem9');

for (let i of elem9.childNodes) {
    if (i.nodeType == 3) {
        console.log(i.data);
    };
    
    console.log(i.innerHTML);
};


// Ex. 10 
let elem10 = document.querySelector('#elem10');

for (let i of elem10.childNodes) {
    console.log(i.textContent += i.nodeType);
}; 
