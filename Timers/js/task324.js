// Ex. 1
let numberP = document.querySelector("#number1");
let startBtn = document.querySelector("#start1");
let number = Number(numberP.textContent);

startBtn.addEventListener("click", function () {
  let intervalId = setInterval(function () {
    number++;
    numberP.textContent = number;
  }, 1000);
});


// Ex. 2
let startBtn2 = document.querySelector("#start2");
let numberP2 = document.querySelector("#number2");
let counter = Number(numberP2.textContent);
let TimerId;

startBtn2.addEventListener("click", function () {
  TimerId = setInterval(function () {
    counter--;
    numberP2.textContent = counter;
    if (counter == 0) {
      clearInterval(TimerId);
    }
  }, 1000);
});


// Ex. 3
let elem = document.querySelector("#elem");

elem.addEventListener("click", function () {
  setInterval(function () {
    elem.value = Number(elem.value) ** 2;
  }, 1000);
});


// Ex. 4
let elem2 = document.querySelector("#elem2");
let countdownP = document.querySelector("#countdown");
let TimerId2;

elem2.addEventListener("blur", function () {
  let number = Number(elem2.value);

  let countdownNumber = number;
  countdownP.textContent = countdownNumber;

  TimerId2 = setInterval(function () {
    countdownNumber--;

    if (countdownNumber < 0) {
      clearInterval(TimerId2);
      countdownP.textContent = "Отсчет завершен";
    } else {
      countdownP.textContent = countdownNumber;
    }
  }, 1000);
});


// Ex. 5
let elem3 = document.querySelector("#elem3");
let countdownP2 = document.querySelector("#countdown2");
const startBtn5 = document.getElementById("start5");
let TimerId3;

startBtn5.addEventListener("click", function () {
  let number2 = Number(elem3.value);

  let countdownNumber2 = number2;
  countdownP2.textContent = countdownNumber2;

  TimerId3 = setInterval(function () {
    countdownNumber2--;
    countdownP2.textContent = countdownNumber2;

    if (countdownNumber2 < 0) {
      clearInterval(TimerId3);
      countdownP2.textContent = "Отсчет завершен";
    }
  }, 1000);
});


// Ex. 6
let counter2 = document.querySelector("#counter2");
let startBtn3 = document.querySelector("#startBtn3");
let stopBtn3 = document.querySelector("#stopBtn3");

let timerId4;

startBtn3.addEventListener("click", function () {
  timerId4 = setInterval(function () {
    let currentValue = Number(counter2.textContent);
    currentValue++;
    counter2.textContent = currentValue;
  }, 1000);
});

stopBtn3.addEventListener("click", function () {
  clearInterval(timerId4);
});


// Ex. 7
let p7 = document.querySelector("#p7");
// задаем начальный цвет
let color = "red";

// каждую секунду меняем цвет
setInterval(function () {
  if (color === "red") {
    p7.style.color = "green";

    color = "green";
  } else {
    p7.style.color = "red";

    color = "red";
  }
}, 1000);


// Ex. 8
let clock = document.querySelector("#clock");

setInterval(function () {
  let date = new Date();

  let h = addZero(date.getHours());
  let m = addZero(date.getMinutes());
  let s = addZero(date.getSeconds());

  clock.innerHTML = h + ":" + m + ":" + s;
}, 1000);

function addZero(num) {
  if (num <= 9) {
    return "0" + num;
  } else {
    return num;
  }
}; 
