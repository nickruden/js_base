// Ex. 1 
let inp1 = document.querySelector('#inp1');
let p1 = document.querySelector('#p1');

inp1.addEventListener('change', () => p1.innerHTML = inp1.value);


// Ex. 2 
let elem2 = document.querySelector('#elem2');

elem2.addEventListener('change', () => console.log(elem2.value));


// Ex. 4 
let inp4 = document.querySelector('#inp4');

inp4.addEventListener('change', () => {
    if (inp4.value.length < 5) {
        inp4.style.border = "1px solid green";
    } else {
        inp4.style.border = "1px solid red";
    };
}); 
