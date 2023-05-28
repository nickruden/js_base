// Ex. 1 
let elems1 = document.querySelector('#elem1');

elem1.addEventListener('change', function func() { 
    for (let elem of elems1) {
        if (elem.selected) {
            elem.text += '!';
        } else {
            elem.text += '?';
        };
    };
});


// Ex. 2 
let elem2 = document.querySelector('#elem2');
let btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', () => {
    let option = elem2[4];
    option.selected = true;
});


// Ex. 3 
let elem3 = document.querySelector('#elem3');
let btn3 = document.querySelector('#btn3');

btn3.addEventListener('click', () => {
    console.log(elem3[elem3.selectedIndex].text);
});


// Ex. 4 
let elem4 = document.querySelector('#elem4');
let btn4 = document.querySelector('#btn4');

btn4.addEventListener('click', () => {
    elem4[elem4.selectedIndex].text += '!';
}); 
