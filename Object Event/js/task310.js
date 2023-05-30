// Ex. 1 
let elem1 = document.querySelector('#elem1');

elem1.addEventListener('click', function(event) {
	event.target.innerHTML = event.target.innerHTML + '!';
});


// Ex. 2 
let elem2 = document.querySelector('#elem2');

elem2.addEventListener('click', function(event) {
	let li = event.target.closest('li');
	
	if (li) {
		li.innerHTML = li.innerHTML + '!';
	}
}); 
