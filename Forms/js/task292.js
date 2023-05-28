// Ex. 1 
let elem1_1 = document.querySelector('#elem1_1');
let elem1_2 = document.querySelector('#elem1_2');

elem1_1.addEventListener('input', () => {
    if (elem1_1.value.length >= 2) {
        elem1_2.focus();
    };
});

elem1_2.addEventListener('input', () => {
    if (elem1_2.value.length >= 2) {
        elem1_2.blur();
    };
}); 
