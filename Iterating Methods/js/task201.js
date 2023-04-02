// Ex. 1 
let arr1 = [1, 2, 3, 4, 5];

let res1 = arr1.every( function(elem) {
    return elem > 0;
});
console.log(res1);


// Ex. 2 
let arr2 = [1, 2, 3, 4, 5];

let res2 = arr2.every( function(elem, index) {
    return elem * index < 30;
});
console.log(res2);