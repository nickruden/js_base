// Ex. 1 главным недостатком этого кода, является обращение каждый раз к методу querySelector, который замедляет работу браузера 
// console.log(document.querySelector('#image').src);
// console.log(document.querySelector('#image').width);
// console.log(document.querySelector('#image').height);

let elem = document.querySelector('#image');
console.log(elem.src); 
console.log(elem.width); 
console.log(elem.height); 
