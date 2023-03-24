// Ex. 1
let str1 = 'js';
console.log(str1.toUpperCase());

// Ex. 2
let str2 = 'JS';
console.log(str2.toLowerCase());

// Ex. 3
let str3 = 'я учу javascript!';
console.log(str3.substr(2, 3));
console.log(str3.substring(2, 5));
console.log(str3.slice(2, 5));

console.log(str3.substr(6, 10));
console.log(str3.substring(6, 16));
console.log(str3.slice(6, -1));

// Ex. 4
let str4 = 'abcde';
console.log(str4.indexOf('c'));

// Ex. 5
let str5 = '11e12abcde';
if (str5.indexOf('a') != -1) {
    console.log("Строка содержит символ 'a'");
} else {
    console.log("Строка не содержит символ 'a'");
}

// Ex. 6
let str6 = 'abcde';
if (str6.indexOf('a') == 0) {
    console.log("Строка начинается с символа 'a'");
} else {
    console.log("Строка не начинается с символа 'a'");
}

// Ex. 7
let str7 = 'abcde';
if (str7.lastIndexOf('a') == str7.length - 1) {
    console.log("Строка заканчивается на символ 'a'");
} else {
    console.log("Строка не заканчивается на символ 'a'");
}

// Ex. 8
let str8 = 'http://tf34abcde';
if (str8.indexOf('http://') == 0) {
    console.log("Строка начинается на 'http://'");
} else {
    console.log("Строка не начинается на 'http://'");
}

// Ex. 9
let str9 = 'abcde.htmly';
if (str9.lastIndexOf('.html') == str9.length - 5) {
    console.log("Строка заканчивается на '.html'");
} else {
    console.log("Строка не заканчивается на '.html'");
}

// Ex. 10
let str10 = 'mqwertyhttp://';
if (str10.startsWith('http://')) {
    console.log("Строка начинается на 'http://'");
} else {
    console.log("Строка не начинается на 'http://'");
}

// Ex. 11
let str11 = 'http://mqwerty.html';
if (str11.endsWith('.html')) {
    console.log("Строка заканчивается на '.html'");
} else {
    console.log("Строка не заканчивается на '.html'");
}

// Ex. 12
let str12 = '1-2-3-4-5';
console.log(str12.split('-'));

// Ex. 13
let str13 = '12345';
let arrstr13 = str13.split('');
console.log(arrstr13);

// Ex. 14 
let arr = [1, 2, 3, 4, 5];
let strarr = arr.join('-');
console.log(strarr);