// Ex. 1 [[1, 2], [3, 4], [5, 6], [7, 8]]
let arr1 = []
let k1 = 1;

for (let i = 0; i <= 3; i++) {
    arr1[i] = []

    for (let j = 0; j <= 1; j++) {
        arr1[i].push(k1++)
    }
}
console.log("1) [" + arr1 + "]");


// Ex. 2 [[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]
let arr2 = []
let k2 = 0;

for (let i = 0; i <= 3; i++) {
    arr2[i] = []

    for (let j = 0; j <= 2; j++) {
        arr2[i].push(k2+=2)
    }
}
console.log("2) [" + arr2 + "]");


// Ex. 3 [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
let arr3 = []
let k3 = 0;

for (let i = 0; i <= 1; i++) {
    arr3[i] = []

    for (let j = 0; j <= 1; j++) {
        arr3[i][j] = []

        for(let k = 0; k <= 1; k++) {
            arr3[i][j].push(k3 += 1)
        }
    }
}
console.log("3) [" + arr3 + "]");