/* Ex. 1 
let elems = document.querySelector('p');
elems.textContent += '!'; */ 
let elems1 = document.querySelectorAll('#p1');

for(let elem of elems1) {
    elem.textContent += '!';
};


/* Ex. 2 
let elems = document.querySelectorAll('p');

for (let elem of elems) {
	elem.addEventListener('click', function() {
		this.textContent += Number(1);
	});
} */ 
let elems2 = document.querySelectorAll('#p2');

for (let elem of elems2) {
	elem.addEventListener('click', function() {
		this.textContent++;
	});
}


/* Ex. 3 
let button = document.querySelector('button');
let elem   = document.querySelector('p');

button.addEventListener('click', function() {
	elem.innerHTML = '<b>elem.innerHTML</b>';
}); */ 
let button3 = document.querySelector('#btn3');
let elem3   = document.querySelector('#p3');

button3.addEventListener('click', function() {
	elem3.innerHTML = '<b>text</b>';
});


/* Ex. 4 
let button = document.querySelector('button');
let elems  = document.querySelector('p');

button.addEventListener('click', function() {
	let sum = 0;
	
	for (let elem of elems) {
		sum += Number(elems.textContent);
	}
	
	console.log(sum);
}); */ 
let button4 = document.querySelector('#btn4');
let elems4  = document.querySelectorAll('#p4');

button4.addEventListener('click', function() {
	let sum = 0;
	
	for (let elem of elems4) {
		sum += Number(elem.textContent);
	}
	
	console.log(sum);
});


/* Ex. 5 
let elems = document.querySelectorAll('p');

for (let elem of elems) {
	elem.addEventListener('click', () => {
		this.textContent += '!';
	});
} */ 
let elems5 = document.querySelectorAll('#p5');

for (let elem of elems5) {
	elem.addEventListener('click', function func() {
		this.textContent += '!';
	});
}


/* Ex. 6 
let button = document.querySelector('button');
let elems  = document.querySelectorAll('p');

button.addEventListener('click', function() {
	for (let elem of elems) {
		elem.innerHTML = '<b>+elem.innerHTML+</b>';
	}
}); */ 
let button6 = document.querySelector('#btn6');
let elems6  = document.querySelectorAll('#p6');

button6.addEventListener('click', function() {
	for (let elem of elems6) {
		elem.style.fontWeight = 'bold';
	}
});


/* Ex. 7 
let button = document.querySelector('button');
let elems  = document.querySelectorAll('p');
let sum = 0;

for (let elem of elems) {
	sum = elem.textContent + 1;
	
	button.addEventListener('click', function() {
		console.log(sum);
	});
} */ 
let button7 = document.querySelector('#btn7');
let elems7  = document.querySelectorAll('#p7');
let sum7 = 0;

for (let elem of elems7) {
	sum7 += Number(elem.textContent);
};

button7.addEventListener('click', function() {
    console.log(sum7);
});


/* Ex. 8 
let button = document.querySelector('button');
let elems  = document.querySelectorAll('input');
let sum = 0;

for (let elem of elems) {
	sum += elem.value;
}

button.addEventListener('click', function() {
	console.log(sum);
}); */ 
let button8 = document.querySelector('#btn8');
let elems8  = document.querySelectorAll('#inp8');

button8.addEventListener('click', function() {
    let sum8 = 0;

    for (let elem of elems8) {
        sum8 += Number(elem.value);
    }

	console.log(sum8);
});


/* Ex. 9 
let btn  = document.querySelector('#btn');
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');
let inp3 = document.querySelector('#inp3');

btn.addEventListener('click', function() {
	inp3.textContent = inp1.textContent + inp2.textContent;
}); */ 
let btn9  = document.querySelector('#btn9');
let inp9_1 = document.querySelector('#inp9_1');
let inp9_2 = document.querySelector('#inp9_2');
let inp9_3 = document.querySelector('#inp9_3');

btn9.addEventListener('click', function() {
	inp9_3.value = Number(inp9_1.value) + Number(inp9_2.value);
});


/* Ex. 10 
let btn  = document.querySelector('btn');
let res  = document.querySelector('res');
let inp1 = document.querySelector('inp1');
let inp2 = document.querySelector('inp2');

button.addEventListener('click', function() {
	res.value = inp1.value + inp2.value;
}); */ 
let btn10  = document.querySelector('#btn10');
let res10  = document.querySelector('#res10');
let inp10_1 = document.querySelector('#inp10_1');
let inp10_2 = document.querySelector('#inp10_2');

btn10.addEventListener('click', function() {
	res10.textContent = Number(inp10_1.value) + Number(inp10_2.value);
}); 
