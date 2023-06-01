// Ex. 1, 2  
let btn = document.querySelector("#btn");

btn.addEventListener('click', function func() {
    let num = 100;

    setInterval(() => {
        num--;
        console.log(num);
    }, 1000);

    btn.removeEventListener('click', func);
}); 
