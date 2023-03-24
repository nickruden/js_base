// Ex. 1
let arr1 = [1, 2, 3];
arr1.push(4, 5, 6);
console.log(arr1);

// Ex. 2
let arr2 = [1, 2, 3];
console.log(arr2.unshift(4, 5, 6));

// Ex. 3
let arr3 = [1, 2, 3];
let firstelem3 = arr3.shift();
console.log(firstelem3);

// Ex. 4
let arr4 = [1, 2, 3];
let lastelem4 = arr4.pop();
console.log(arr4.pop());

// Ex. 5
let arr5 = [1, 2, 3, 4, 5];
let arr5sl = arr5.slice(0, 3);
console.log(arr5sl);

// Ex. 6
let arr6 = [1, 2, 3, 4, 5];
let arr6sl = arr6.slice(3);
console.log(arr6sl);

// Ex. 7
let arr7 = [1, 2, 3, 4, 5];
console.log(arr7.splice(1, 2));

// Ex. 8 
let arr8 = [1, 2, 3, 4, 5];
arr8.splice(3, 0, 'a', 'b', 'c');
console.log(arr8);

// Ex. 9
let arr9 = [1, 2, 3, 4, 5];
arr9.splice(1, 0, 'a', 'b');
arr9.splice(6, 0, 'c');
arr9.splice(8, 0, 'e');
console.log(arr9);

// Ex. 10
let arr10 = [1, 2, 3, 4, 5];
console.log(arr10.indexOf(3));

// Ex. 11
let arr11 = [1, 2, 3, 4, 5];
console.log(arr1.includes(3));