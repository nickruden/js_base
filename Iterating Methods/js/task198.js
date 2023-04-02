// Ex. 1
let arr1 = [1, 2, 3, 4, 5];

let resultarr1 = arr1.map( function(elem) {
    return Math.sqrt(elem);
});
console.log(resultarr1);


// Ex. 2 
let arr2 = ['apple', 'peach', 'kiwi', 'pear'];

let resultarr2 = arr2.map( function(elem) {
    return elem += '!';
});
console.log(resultarr2);


// Ex. 3 
let arr3 = ['apple', 'peach', 'kiwi', 'pear'];

let resultarr3 = arr3.map( function(elem) {
    return elem.split("").reverse().join("");
});
console.log(resultarr3);


// Ex. 4 
let arr4 = ['123', '456', '789'];
let arr42 = [];

let resultarr4 = arr4.map( function(elem) {
    arr42 = elem.split("");
    for (let i = 0;  i <= arr42.length - 1; i++) {
        arr42[i] = Number(arr42[i]);
    }

    return arr42;
});
console.log(resultarr4);


// Ex. 5 
let arr5 = [1, 2, 3, 4, 5];

let resultarr5 = arr5.map( function(elem, index) {
    return elem * index;
});
console.log(resultarr5); 