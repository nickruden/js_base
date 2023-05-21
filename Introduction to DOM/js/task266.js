// Ex. 1 
let elem1 = document.querySelector('#elem1');
elem1.addEventListener('focus', function() {this.value = 1});
elem1.addEventListener('blur', function() {this.value = 2});


// Ex. 2 
let btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', function() {
    this.value = Number(this.value) + 1;
}); 
