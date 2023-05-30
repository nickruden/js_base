// Ex. 1 
let elem1_1 = document.querySelector('#elem1_1');
let elem1_2 = document.querySelector('#elem1_2');
let elem1_3 = document.querySelector('#elem1_3');

function func() {
	console.log(this.value);
};

func.call(elem1_1);
func.call(elem1_2);
func.call(elem1_2);


// Ex. 2 
let elem2 = document.querySelector('#elem2');

function func(surname, name) {
	console.log(this.value + ', ' + name + ' ' + surname);
}

func.call(elem2, 'John', 'Smit'); // тут должно вывести 'hello, John Smit' 
