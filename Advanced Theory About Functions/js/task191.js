// Ex. 1
function test1() {
    let num = 1;

    return function() {
        console.log(num);
        num++;
    }
}

let func11 = test1();
func11();
func11();

let func12 = test1();
func12();
func12();


// Ex. 2
function test2() {
    let num = 10;

    return function () {
       console.log(num);
       num--;
    };
}

let func21 = test2();
func21();
func21();


// Ex. 3
function test3() {
    let num = 10;
    
    return function() {
        if (num != 0) {
            console.log(num);
            num--;
        } else {
            console.log("Отсчёт окончен");
        }
    }
}

let func3 = test3();
func3();
func3();
func3();
func3();
func3();
func3();
func3();
func3();
func3();
func3();
func3();


// Ex. 4  В консоль выведется 0, 0, 0
function func4() {
	let num = 0;
	
	return function() {
		console.log(num);
		num++;
	};
}

func4()();
func4()();
func4()();


// Ex. 5  В консоль выведется 0, 0, 0
function func5() {
	let num = 0;
	
	return function() {
		console.log(num);
		num++;
	};
}

let test5 = func5;

test5()();
test5()();
test5()();


// Ex. 6  В консоль выведется 0, 1, 2, 3 
let counter = 0;
		
function test6() {
	return function() {
		console.log(counter);
		counter++;
	};
}

let func6 = test6;

let func61 = func6();
let func62 = func6();
func61();
func62();
func61();
func62();


// Ex. 7  В консоль выведется 0, 1, 2, 3
function test7() {
	let counter = 0;
	
	return function() {
		return function() {
			console.log(counter);
			counter++;
		};
	};
}

let func7 = test7()();

let func71 = func7;
let func72 = func7;
func71();
func72();
func71();
func72();


// Ex. 8  В консоль выведется 0, 1, 2, 3
function test8() {
	let counter = 0;
	
	return function() {
		return function() {
			console.log(counter);
			counter++;
		};
	};
}

let func8 = test8();

let func81 = func8();
let func82 = func8();
func81();
func82();
func81();
func82();