// Ex. 1 
let arr11 = [1, 2, 3];
let arr12 = arr11;
arr11[0] = 'a';
console.log(arr12); 
alert("Упражнение №1. В консоль выведется массив с элементами [a,2,3]");

// Ex. 2
let arr23 = [1, 2, 3];
let arr24 = arr23;
arr23[0] = 'a';
arr24[1] = 'b';
console.log(arr23);
alert("Упражнение №2. В консоль выведется массив с элементами [a,b,3]");

// Ex. 3
let arr31 = [1, 2, 3];
let arr32 = arr31;
arr31[0] = 'a';
arr32[0] = 'b';
console.log(arr32);
alert("Упражнение №3. В консоль выведется массив с элементами [b,2,3]");