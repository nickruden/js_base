// Ex. 1 
let elem = document.querySelector('#elem');

elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);

function func(event) {
	if (event.type == 'click') {
        this.style.backgroundColor = 'green';
    } else if (event.type == 'dblclick') {
        this.style.backgroundColor = 'red';
    };
}; 
