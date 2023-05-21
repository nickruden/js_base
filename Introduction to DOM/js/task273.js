// Ex. 1 
let elem1 = document.querySelectorAll('.elem1');

for (i of elem1) {
    i.addEventListener('click', function() {
        this.textContent++;
    });
}; 


// Ex. 2 
let elem2 = document.querySelectorAll('.elem2');

for (i of elem2) {
    i.addEventListener('click', function func() {
        this.textContent++;
        this.removeEventListener('click', func);
    });
};


// Ex. 3 
let elem3 = document.querySelectorAll('.elem3');

for (i of elem3) {
    i.addEventListener('click', function func() {
        if (this.textContent < 10) {
            this.textContent++;
        } else {
            this.removeEventListener('click', func);
        };
    });
}; 
