// Ex. 1 
let elem = document.getElementById('elem');
elem.textContent = 'text';


// Ex. 2 
let li = document.getElementsByTagName('li');

for (let i of li) {
    i.style.color = 'red';
};


// Ex. 3 
let p = document.getElementsByClassName('www');

for (let i of p) {
    i.style.color = 'red';
}; 
