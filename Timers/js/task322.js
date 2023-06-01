// Ex. 1 
let elem1 = document.querySelector('#elem1');

elem1.addEventListener('click', function() {
    let self = this;

	setInterval(function() {
		self.value = Number(elem1.value) + 1;
	}, 1000);
});


// Ex. 2 
let elem2 = document.querySelector('#elem2');

elem2.addEventListener('click', function() {
	setInterval(() => {
		this.value = Number(elem2.value) + 1;
	}, 1000);
}); 
