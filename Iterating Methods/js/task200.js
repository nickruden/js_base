// Ex. 1 
let arr1 = [-1, 2, -3, 4, 5];

let res1 = arr1.filter( function(elem) {
    return elem >= 0;
});
console.log(res1);


// Ex. 2 
let arr2 = [1, -2, 3, 4, -5];

let res2 = arr2.filter( function(elem) {
    return elem < 0;
});
console.log(res2);


// Ex. 3 
let arr3 = [-4, 0, 8, 4, 10];

let res3 = arr3.filter( function(elem) {
    return (elem > 0 && elem < 10);
});
console.log(res3);


// Ex. 4 
let arr4 = ['123', '4567', '891011', '12131415'];

let res4 = arr4.filter( function(elem) {
    return elem.length > 5;
});
console.log(res4);


// Ex. 5 
let arr5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let res5 = arr5.filter( function(elem, index) {
    return elem * index > 30;
});
console.log(res5);


// Ex. 6 
let arr6 = [1, 'a', 'b', 2, [3, 4], ['c', 'd']];

let res6 = arr6.filter( function(elem) {
    return typeof(elem) != 'object';
});
console.log(res6);


// Ex. 7 
let arr7 = [-9, -6, -4, -1, 0, 5, 9];

let res7 = arr7.filter( function(elem) {
    return elem < 0;
});
console.log(res7.length);