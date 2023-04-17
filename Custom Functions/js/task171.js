// Ex. 1 
let arr1 = [1, 2, 3, 4, 5]

function sumArr(arr) {

   let res = 0;

   for (let elem of arr) {
      res += elem;
   };

   return res;
};

console.log(sumArr(arr1));


// Ex. 2 
let num2 = 12;
let newArr2 = [];

function getDivider(number) {

   for (let i = 1; i <= number; i++) {
      if (number % i == 0) {
         newArr2.push(i)
      } else {
         continue;
      };
   };
   return newArr2;
};

console.log(getDivider(num2));


// Ex. 3 
let str3 = 'Hello world!';
let newArr3 = [];

function getWordArr(str) {
   newArr3 = str.split('');
   return newArr3;
};

console.log(getWordArr(str3));


// Ex. 4 
let str4 = 'Hello world!';
let newStr4 = '';

function getNewStr(str) {
   newStr4 = str.split('').reverse().join('');
   return newStr4;
};

console.log(getNewStr(str4));


// Ex. 5 
let str5 = 'hello world!';
let newStr5 = '';

function upperStr(str) {
   newStr5 = str.slice(0, 1).toUpperCase() + str.slice(1);
   return newStr5;
};

console.log(upperStr(str5));


// Ex. 6 
let str6 = 'hello world!';

function newStrUpper(str) {
   let words = str.split(' ');

   for (let i = 0; i <= words.length - 1; i++) {
      words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
   };

   let result = words.join(' ');
   return result;
};

console.log(newStrUpper(str6));


// Ex. 7 
let num = 10;
let newArr7 = [];

function getArr(number) {

   for (let i = 1; i <= number; i++) {
      newArr7.push(i);
   };

   return newArr7;
};

console.log(getArr(num))


// Ex. 8 
let arr8 = [1, 2, 3, 4, 5];
let randomElem;

function getRandomElem(arr) {
   randomElem = Math.floor(Math.random() * arr.length);
   let res = arr[randomElem];
   return res;
};

console.log(getRandomElem(arr8))


// Ex. 9 
let number = 1;

function isPrime(num) {
   for (var i = 2; i < num; i++)
      if (num % i === 0) {
         return false;
      }
   return num > 1;
};

console.log(isPrime(number))


// Ex. 10 
let number1 = 12;
let number2 = 10;

function sumDividers(num) {
   let sum = 0;
   for (let i = 0; i < num; i++) {
      if (num % i == 0) {
         sum += i;
      } else {
         continue;
      };
   };
   return sum;
};

function checkFriendliness(num1, num2) {
   if (sumDividers(num1) == sumDividers(num2) || sumDividers(num2) == sumDividers(num1)) {
      return true;
   } else {
      return false;
   };
};

if (checkFriendliness(number1, number2)) {
   console.log(`Числа ${number1} и ${number2} дружественные`);
} else {
   console.log(`Числа ${number1} и ${number2} не дружественные`);
};


// Ex. 11 
let number3 = 999;
let number4 = 10;

function getDividers(num) {

   let dividers = [];
   for (let i = 0; i <= num; i++) {
      if (num % i == 0) {
         dividers.push(i);
      } else {
         continue;
      };
   };
   return dividers;
};

if (number3 > 999 || number4 > 999) {
   console.log(`Числа больше 1000`);
} else {
   console.log(`Все делители числа ${number3} - ` + getDividers(number3));
   console.log(`Все делители числа ${number4} - ` + getDividers(number4));
};


// Ex. 12 
let num12 = 29;

if (sumDividers(num12) == num12) {
   console.log(`Число ${num12} совершенное`);
} else {
   console.log(`Число ${num12} не совершенное`);
}


// Ex. 13 
let ticket1 = 123123;

function checkHappyTicket(ticket) {

   let arrTicket = String(ticket).split('');

   function firstThree(ticket_3) {
      let sum1 = 0;
      for (let i = 0; i <= 2; i++) {
         sum1 += ticket_3[i];
      };
      return sum1;
   };

   function secondThree(ticket_6) {
      let sum2 = 0;
      for (let i = 3; i <= 5; i++) {
         sum2 += ticket_6[i];
      };
      return sum2;
   };

   if (firstThree(arrTicket) == secondThree(arrTicket)) {
      return true;
   } else {
      return false;
   };
};


if (checkHappyTicket(ticket1)) {
   console.log(`Билет ${ticket1} - счастливый`)
} else {
   console.log(`Билет ${ticket1} - не счастливый`)
};


// Ex. 14 
let num14_1 = 12;
let num14_2 = 5;

function getDividers14(num1, num2) {
   let arrDividers = [];

   function getDividersNum(num) {
      for (let i = 0; i <= num; i++) {
         if (num % i == 0) {
            arrDividers.push(i);
         } else {
            continue;
         };
      };
   };

   getDividersNum(num1);
   getDividersNum(num2);

   return arrDividers;
};

console.log(getDividers14(num14_1, num14_2));


// Ex. 15 
let say = 'Привет, мир!';

function getTranslit(word) {
   let newWord = '';
   let converter = {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
      'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i',
      'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
      'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
      'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch',
      'ш': 'sh', 'щ': 'sch', 'ь': '', 'ы': 'y', 'ъ': '',
      'э': 'e', 'ю': 'yu', 'я': 'ya',

      'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D',
      'Е': 'E', 'Ё': 'E', 'Ж': 'Zh', 'З': 'Z', 'И': 'I',
      'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
      'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T',
      'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'C', 'Ч': 'Ch',
      'Ш': 'Sh', 'Щ': 'Sch', 'Ь': '', 'Ы': 'Y', 'Ъ': '',
      'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya'
   };

   for (let i = 0; i < word.length; i++) {
      if (converter[word[i]] == undefined) {
         newWord += word[i];
      } else {
         newWord += converter[word[i]];
      };
   };

   return newWord;
};

console.log(getTranslit(say))


// Ex. 16 
let num16 = 123;

function getNumWords(num) {

   x00 = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
   x0 = ['', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
   x = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
   xx = ['', 'одиннацать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];

   let str = String(num);

   let ed = num % 10; 
   let dec = Math.floor(num / 10); 
   let dec1 = dec % 10; 
   let sot = Math.floor(num / 100); 

   if (str.length == 1) {
      return x[num]
   } else if (str.length == 2) {
      if (ed == 0) {
         return x0[dec - 1]

      } else if (str[0] == '1') {
         return xx[ed]

      } else {
         return x0[dec1 - 1] + ' ' + x[ed]
      }
   } else if (str.length == 3) {
      if (str[1] == '0' && str[2] == '0') {
         return x00[sot]

      } else if (str[1] == '1') {
         return x00[sot] + ' ' + xx[ed]

      } else if (str[1] == '0') {
         return x00[sot] + ' ' + x[ed];

      } else {
         return x00[sot] + ' ' + x0[dec1 - 1] + ' ' + x[ed];
      };


   };

};

console.log(getNumWords(991))