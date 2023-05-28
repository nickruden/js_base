// Ex. 1 
let inp1 = document.querySelector('#inp1');
let elem1 = document.querySelector('#elem1');

inp1.addEventListener('blur', () => {
    elem1.selectedIndex = inp1.value;
});


// Ex. 2 
let elem2 = document.querySelector('#elem2');

let date = new Date();

elem2.selectedIndex = date.getDay(); 
