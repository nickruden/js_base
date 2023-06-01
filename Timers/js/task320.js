// Ex. 1 
let num = 100;
let timerID1;
let btn1_1 = document.querySelector("#btn1_1");
let btn1_2 = document.querySelector("#btn1_2");

btn1_1.addEventListener('click', () => {
    
    timerID1 = setInterval(() => {
        num--;
        console.log(num);

        if (num == 0) {
            clearInterval(timerID1);
        };
    }, 1000);
});

btn1_2.addEventListener('click', () => {
    clearInterval(timerID1);
});


// Ex. 2 
let timerId2;
let start2 = document.querySelector('#start2');
let stop2  = document.querySelector('#stop2');

start2.addEventListener('click', function() {
	timerId2 = setInterval(function() {
		let date = new Date;
		console.log(date.getMinutes() + ' ' + date.getSeconds());
	}, 1000);
});

stop2.addEventListener('click', function() {
	clearInterval(timerId2);
});


// Ex. 3 
let start3 = document.querySelector('#start3');
let stop3  = document.querySelector('#stop3');

let timerId3;

start3.addEventListener('click', function() {
	timerId3 = setInterval(function() {
		let date = new Date;
		console.log(date.getMinutes() + ' ' + date.getSeconds());
	}, 1000);
});

stop3.addEventListener('click', function() {
	clearInterval(timerId3);
});


// Ex. 4 
let start4 = document.querySelector('#start4');
let stop4  = document.querySelector('#stop4');

let timerId4;

start4.addEventListener('click', function() {
	timerId4 = setInterval(function() {
		let date = new Date;
		console.log(date.getMinutes() + ' ' + date.getSeconds());
	}, 1000);
});

stop4.addEventListener('click', function() {
	clearInterval(timerId4);
});


// Ex. 5 
let start5 = document.querySelector('#start5');
let stop5  = document.querySelector('#stop5');

let timerId5;

start5.addEventListener('click', function() {
	timerId5 = setInterval(function() {
		let date = new Date;
		console.log(date.getMinutes() + ' ' + date.getSeconds());
	}, 1000);
});

stop5.addEventListener('click', function() {
	clearInterval(timerId5);
});


// Ex. 6 
let start6 = document.querySelector('#start6');
let stop6  = document.querySelector('#stop6');

let timerId6; // сделаем переменную глобальной

function func() {
	let i = 0;
	
	timerId6 = setInterval(function() {
		console.log('!')
	}, 1000);

    start6.removeEventListener('click', func);
};

start6.addEventListener('click', func);

stop6.addEventListener('click', function() {
	clearInterval(timerId6);
    start6.addEventListener('click', func);
}); 
