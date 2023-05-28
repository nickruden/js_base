// Ex. 1 
let elem1 = document.querySelector('#elem1');
let p1 = document.querySelector('#p1');
let btn1 = document.querySelector('#btn1');

btn1.addEventListener('click', () => p1.innerHTML = elem1.value);


// Ex. 2 
let elem2 = document.querySelector('#elem2');

elem2.addEventListener('change', () => {
    let date = new Date(elem2.value, 2, 0);

    if (date.getDate() == 29) {
        console.log(elem2.value, '- високосный год');
    } else {
        console.log(elem2.value, '- невисокосный год');
    };
});


// Ex. 3 
let elem3 = document.querySelector('#elem3');

elem3.addEventListener('change', () => {
    if (elem3.value == 6 || elem3.value == 7) {
        console.log('Выбран выходной день');
    } else {
        console.log('Выбран рабочий день');
    };
}); 
