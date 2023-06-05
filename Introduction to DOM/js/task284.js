// Ex. 1 
let inp1 = document.querySelector('#inp1');
let p1 = document.querySelector('#p1');

inp1.addEventListener('blur', () => p1.innerHTML = inp1.value);


// Ex. 2 
let inp2_1 = document.querySelector('#inp2_1');
let inp2_2 = document.querySelector('#inp2_2');
let inp2_3 = document.querySelector('#inp2_3');
let inp2_4 = document.querySelector('#inp2_4');
let p2 = document.querySelector('#p2');
let btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', () => p2.innerHTML = Number(inp2_1.value) + Number(inp2_2.value) + Number(inp2_3.value) + Number(inp2_4.value));


// Ex. 3 
let inp3 = document.querySelector('#inp3')
inp3.addEventListener('blur', () => {
    let summ = 0;

    for (let i of inp3.value) {
        summ += Number(i);
    };
    console.log(summ);
});


// Ex. 4 
let inp4 = document.querySelector('#inp4')
inp4.addEventListener('blur', () => {
    let summ = 0;
    let count_i = 0;

    for (let i of inp4.value) {
        count_i++;
        summ += Number(i);
    };

    console.log(summ / count_i);
});


// Ex. 5 
let inp5_1 = document.querySelector('#inp5_1');
let inp5_2 = document.querySelector('#inp5_2');
let inp5_3 = document.querySelector('#inp5_3');
let inp5_4 = document.querySelector('#inp5_4');

inp5_1.addEventListener('blur', () => {
    let arr_inp = inp5_1.value.split(' ');

    inp5_2.value = arr_inp[0];
    inp5_3.value = arr_inp[1];
    inp5_4.value = arr_inp[2];
});


// Ex. 6 
let inp6 = document.querySelector('#inp6');

inp6.addEventListener('blur', () => {
    inp6.value = inp6.value.toUpperCase();
});


// Ex. 7 
let inp7 = document.querySelector('#inp7');

inp7.addEventListener('blur', () => {
    let arr_inp = inp7.value.split(' ');
    let count_i = 0;

    for (let i of arr_inp) {
        if (i.length > 1) {
            count_i++;
        }
    };

    console.log(count_i);
});


// Ex. 8 
let inp8 = document.querySelector('#inp8');

inp8.addEventListener('blur', () => {
    let date = inp8.value;

    inp8.value = date.split('.').reverse().join('-');
});


// Ex. 9 
let inp9 = document.querySelector('#inp9');
let btn9 = document.querySelector('#btn9');

btn9.addEventListener('click', () => {
    if (inp9.value.toUpperCase() == inp9.value.toUpperCase().split('').reverse().join('')) {
        console.log('true');
    } else {
        console.log('false');
    };
});


// Ex. 10 
let inp10 = document.querySelector('#inp10');

inp10.addEventListener('blur', () => {
    let flag = false;

    for (let i of inp10.value) {
        if (i == '3') {
            flag = true;
            console.log(flag);
            break;
        };
    };

    if (flag == false) {
        console.log(flag);
    };
});


// Ex. 11 
let ps11 = document.querySelectorAll('#p11');
let btn11 = document.querySelector('#btn11');

btn11.addEventListener('click', () => {
    for (let p11 = 0; p11 < ps11.length; p11++) {
        ps11[p11].innerHTML += (p11 + 1);
    };
});


// Ex. 12 
let links12 = document.querySelectorAll('#a12');

for (let link12 of links12) {
    link12.innerHTML += link12.href;
}; 
