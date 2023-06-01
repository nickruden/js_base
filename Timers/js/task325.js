// Ex. 1
const p1 = document.querySelector("#p1");
const text = p1.textContent;
const num = Number(text);

setTimeout(function () {
square = num ** 2;
p1.textContent = square;
}, 10000);


// Ex. 2
let number = 0;

function timer() {
setTimeout(function () {
    console.log(number++);

    timer(); // вызовем сами себя
}, 1000);
}

timer(); 
