// Ex. 1
let arr1 = [[1, 2, 3], [4, 5], [6]];
let summarr1 = 0;

for (let i of arr1) {
    for(let j of i) {
        summarr1 += j;
    }
}
console.log("1) " + summarr1);

// Ex. 2
let arr2 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]; 
let summarr2 = 0;

for (let i of arr2) {
    for (let j of i) {
        for (let k of j) {
            summarr2 += k
        };
    };
};
console.log("2) " + summarr2);

// Ex. 3
let arr3 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]; 
let summarr3 = 0;

for (let i = 0; i <= arr3.length - 1; i++) {
    for (let j = 0; j <= arr3[i].length - 1; j++) {
        for (let k = 0; k <= arr3[j].length - 1; k++) {
            summarr3 += arr3[i][j][k];
        };
    };
};
console.log("3) " + summarr3);