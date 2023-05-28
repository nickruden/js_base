// Ex. 1 
let radios = document.querySelectorAll('input[type="radio"]');
let p = document.querySelector('#p1');
let btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    for (let i of radios) {
        if (i.checked) {
            p.innerHTML = i.value;
        };
    };
}); 
