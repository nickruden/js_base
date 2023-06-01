// Ex. 1 
let num = 10;
let timerID = setInterval(() => {
    num--;
    console.log(num);

    if (num == 0) {
        clearInterval(timerID);
    }
}, 1000); 
