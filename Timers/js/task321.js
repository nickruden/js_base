// Ex. 2, 3
let inp = document.querySelector("#inp");

let timerId = setInterval(() => {
    inp.value = inp.value - 1;

    if (inp.value == 0) {
        clearInterval(timerId);
    };
}, 1000); 
