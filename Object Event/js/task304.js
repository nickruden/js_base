// Ex. 1 
let inp1 = document.querySelector('#inp1');

inp1.addEventListener('click', (event) => {
    if (event.altKey) {
        inp1.style.backgroundColor = 'red';
    };
});


// Ex. 2 
let elem2 = document.querySelector('#elem2');

elem2.addEventListener('click', (event) => {
    if (event.ctrlKey) {
        event.target.innerHTML += 1;
    } else if (event.shiftKey) {
        event.target.innerHTML += 2;
    };
}); 
