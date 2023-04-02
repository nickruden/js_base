// Ex. 1  В консоль выведется массив ['a', 1, 2, 3, 'b', 'c', 4, 5, 6] 
let arr11 = [1, 2, 3];
let arr12 = [4, 5, 6];

let arr1  = ['a', ...arr11, 'b', 'c', ...arr12];
console.log(arr1);


// Ex. 2  В консоль выведется массив ['a', 1, 2, 3, 1, 2, 3, 'b', 'c'] 
let arr21 = [1, 2, 3];
let arr22 = [4, 5, 6];

let arr2  = ['a', ...arr21, ...arr21, 'b', 'c'];
console.log(arr2);


// Ex. 3  В консоль выведется массив ['a', 'b', 'c', 1, 2, 3, 4, 5, 6] 
let arr31 = [1, 2, 3];
let arr32 = [...arr31, 4, 5, 6];

let arr3  = ['a', 'b', 'c', ...arr32];
console.log(arr3);


// Ex. 4  В консоль выведется массив [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]  
let arr41 = [1, 2, 3];
let arr42 = [...arr41, 4, 5, 6];
let arr43 = [...arr42, 7, 8, 9];

let arr4  = [0, ...arr43];
console.log(arr4);


// Ex. 5  В консоль выведется массив 1, 2, 3 
let arr51 = [1, 2, 3];
let arr52 = [...arr51];

console.log(arr52);