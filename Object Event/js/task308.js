// Ex. 1 
let parent = document.querySelector('#parent');
let button = document.querySelector('#btn');
let block  = document.querySelector('#block');

button.addEventListener('click', function(event) {
	block.classList.add('active');
    event.stopPropagation();
});

parent.addEventListener('click', function() {
	block.classList.remove('active');
}); 
