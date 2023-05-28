// Ex. 1 
let elem1 = document.querySelector('#elem1');
elem1.addEventListener('click', () => elem1.innerHTML += elem1.dataset.text);


// Ex. 2 
let elems2 = document.querySelectorAll('#elem2');

for (let elem of elems2) {
    elem.addEventListener('click', () => elem.innerHTML += elem.dataset.num);
};


// Ex. 3 
let btn3 = document.querySelector('#btn3');
btn3.setAttribute('data-count', 0);

btn3.addEventListener('click', () => btn3.dataset.count++);

btn3.addEventListener('dblclick', () => console.log(btn3.dataset.count));


// Ex. 4 
let elem4 = document.querySelector('#elem4');
elem4.addEventListener('blur', () => {
    if (elem4.value.length != elem4.dataset.length) {
        console.log('Количество символов не совпадает с заданным');
    };
});


// Ex. 5 
let elem5 = document.querySelector('#elem5');
elem5.addEventListener('blur', () => {
    if (elem5.value.length < elem5.dataset.min || elem5.value.length > elem5.dataset.max) {
        console.log('Количество введенных символов не попадает в диапазон');
    };
});


// Ex. 6 
let elem6 = document.querySelector('#elem6');
elem6.addEventListener('click', () => elem6.innerHTML += elem6.dataset.productPrice * elem6.dataset.productAmount);


// Ex. 7 
let elems7 = document.querySelectorAll('#elem7');
count = 0;

for (let elem of elems7) {
    elem.setAttribute('data-num', count += 1);
    console.log(elem.getAttribute('data-num'));
}; 
