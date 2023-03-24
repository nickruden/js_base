// Ex. 1
let str1 = 'abcde';
let str1res = str1.slice(0, 4) + str1.slice(4).toUpperCase();
console.log(str1res);


// Ex. 2
let str2 = 'qwerty';
let str2res = str2.slice(0, 2).toUpperCase() + str2.slice(2);
console.log(str2res);


// Ex. 3
let str3 = 'London';
let str3res = str3.slice(0, 1).toLowerCase() + str3.slice(1);
console.log(str3res);


// Ex. 4
let str4 = 'word1 word2 word3';
let arrstr4 = str4.split(' ');

for (let i = 0; i <= arrstr4.length - 1; i++) {
    arrstr4[i] = arrstr4[i].slice(0, 1).toUpperCase() + arrstr4[i].slice(1);
}

let res4 = arrstr4.join(' ');
console.log(res4);


// Ex 5
let str5 = 'var_test_text';
let arrstr5 = str5.split('_');

for (let i = 0; i <= arrstr5.length - 1; i++) {
    arrstr5[i] = arrstr5[i].slice(0, 1).toUpperCase() + arrstr5[i].slice(1);
}

let res5 = arrstr5.join('');
console.log(res5);


// Ex. 6
let str6 = 'var_test_text';
let arrstr6 = str6.split('_');

for (let i = 0; i <= arrstr6.length - 1; i++) {
    arrstr6[i] = arrstr6[i].slice(0, 1).toUpperCase() + arrstr6[i].slice(1);
}

let arrstr6low = arrstr6.join('');
let res6 = arrstr6low.slice(0, 1).toLowerCase() + arrstr6low.slice(1)
console.log(res6);


// Ex. 7 
let str7 = 'word1 word2 word3 word4';
let res7 = str7.split(' ').reverse().join(' ');

console.log(res7); 