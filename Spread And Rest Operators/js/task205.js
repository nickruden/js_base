// Ex. 1  В консоль выведется массив ['1', '2', '3', '4', '5'] 
let arr11 = [...'12345'];
console.log(arr11);

// Ex. 2  В консоль выведется массив ['a', '1', '2', '3', '4', '5'] 
let arr22 = ['a', ...'12345'];
console.log(arr22);


// Ex. 3  В консоль выведется массив ['1', '2', '3', '4', '5', '6', '7', '8', '9'] 
let arr3 = [...'12345', ...'56789'];
console.log(arr3);


// Ex. 4  В консоль выведется массив ['a', 'b', 'c', '1', '2', '3', '4', '5']  
let arr41 = ['a', 'b', 'c'];
let arr42 = [...arr41, ...'12345'];

console.log(arr42);