// Ex. 1 
let inp1 = document.querySelector('#inp1');

inp1.addEventListener('input', () => { 
    if (inp1.value.length == 5) {
        console.log("Длина текста достигла пяти символов");
    };
});


// Ex. 2 
let inp2 = document.querySelector('#inp2');
let p2 = document.querySelector('#p2');
count_more = 1;

inp2.addEventListener('input', () => {
    count = 5;

    if (inp2.value.length <= 5) {
        p2.innerHTML = count - inp2.value.length;
    } else {
        p2.innerHTML = count_more;
        count_more += 1;
    };
}); 
