// Ex. 1 
let inp1 = document.querySelector('#inp1');

inp1.addEventListener('keyup', (event) => console.log(event.key, event.code));


// Ex. 5 
let elem5 = document.querySelector('#elem5');
let inp5 = document.querySelector('#inp5');

inp5.addEventListener('keyup', (event) => {
    if (event.key == 'Enter') {
        elem5.innerHTML = inp5.value;
        inp5.value = null;
    };
}); 
