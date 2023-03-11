// Ex. 1
let arr1 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr1.length - 1; i++) {
    console.log("1) " + arr1[i+1]);
}


// Ex. 2
let arr2 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr2.length - 1; i++) {
    console.log("2) " + (arr2[i] + arr2[i+1]));
}


// Ex. 3
let arr3 = [1, 2, 3, 4, 5];

for (let i = 2; i <= arr3.length - 1; i++) {
    console.log("3) " + arr3[i-1] + " " + arr3[i-2]);
}


// Ex. 4
let arr4 = [1, 2, 3, 4, 5];

for (let i = 2; i <= arr4.length - 1; i++) {
    console.log("4) " + ( arr4[i] + arr4[i-1] + arr4[i-2]));
}


// Ex. 5
let arr5 = [1, 2, 3, 4, 5];

for (let i = 1; i < arr5.length - 1; i++) {
    console.log("5) " + (arr5[i-1] + arr5[i] + arr5[i+1]));
}