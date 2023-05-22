// Ex. 1 
let elem1 = document.querySelector('#elem1');
let class1_size = elem1.classList;
console.log(class1_size.length);


// Ex. 2 
let elem2 = document.querySelector('#elem2');
let class2 = elem2.classList;

for (let i of class2) {
    console.log(i);
}


// Ex. 3 
let elem3 = document.querySelector('#elem3');
elem3.classList.add('xxx');
let class3 = elem3.classList;

console.log(class3);


// Ex. 4 
let elem4 = document.querySelector('#elem4');
elem4.classList.remove('www', 'zzz');
let class4 = elem4.classList;

console.log(class4);


// Ex. 5 
let elem5 = document.querySelector('#elem5');
let class5 = elem5.classList.contains('ggg');

console.log(class5);


// Ex. 6 
let elem6 = document.querySelector('#elem6');
elem6.classList.toggle('www');
let class6 = elem6.classList;

console.log(class6); 
