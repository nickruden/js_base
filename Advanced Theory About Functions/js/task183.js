// Ex. 1
let arr = [
    function() {return 1},
    function() {return 2},
    function() {return 3},
];

// Ex. 2 
console.log(arr[2]());

// Ex. 3
summarr = arr[0]() + arr[1]() + arr[2]();

// Ex. 4
for (let func of arr) {
    console.log(func())
}