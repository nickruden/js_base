// Ex. 1, 2  
let btn1_2 = document.querySelector("#btn1-2");

btn1_2.addEventListener('click', function func() {
    let num = 100;

    setInterval(() => {
        num--;
        console.log(num);
    }, 1000);

    this.removeEventListener('click', func);
}); 
