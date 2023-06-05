// Ex. 1
let arr1 = [1, 2, 3, 4, 5];
let ul1 = document.querySelector("#elem1");

for (let i = 0; i < arr1.length; i++) {
  let li1 = document.createElement("li");
  li1.textContent = arr1[i];
  ul1.appendChild(li1);
};


// Ex. 2
let arr2 = [1, 2, 3, 4, 5];
let ul2 = document.querySelector("#elem2");

for (let i = 0; i < arr2.length; i++) {
  let li2 = document.createElement("li");
  li2.textContent = arr2[i];
  ul2.appendChild(li2);
}

let lis = document.querySelectorAll("li");

for (let li2 of lis) {
  li2.addEventListener("click", function func() {
    let input = document.createElement("input");
    input.value = li2.textContent;

    li2.textContent = "";
    li2.appendChild(input);

    input.addEventListener("blur", function () {
      li2.textContent = this.value;
      li2.addEventListener("click", func);
    });

    li2.removeEventListener("click", func);
  });
};


// Ex. 3
let arr3 = [1, 2, 3, 4, 5];
let ul3 = document.querySelector("#elem3");

for (let i = 0; i < arr3.length; i++) {
  let li3 = document.createElement("li");
  li3.textContent = arr3[i];
  ul3.appendChild(li3);
}

let lis3 = document.querySelectorAll("li");
for (let li3 of lis3) {
  li3.addEventListener("click", function func() {
    let input2 = document.createElement("input");
    input2.value = li3.textContent;

    li3.textContent = "";
    li3.appendChild(input2);

    input2.addEventListener("blur", function () {
      li3.textContent = this.value;
      li3.addEventListener("click", func);
    });

    li3.removeEventListener("click", func);
  });
}

let addItemBtn = document.querySelector("#addBtn1");

addItemBtn.addEventListener("click", function () {
  let newItemText = document.querySelector("#input1").value;
  if (newItemText !== "") {
    let newLi = document.createElement("li");
    newLi.textContent = newItemText;
    ul3.appendChild(newLi);

    newLi.addEventListener("click", function func() {
      let input = document.createElement("input");
      input.value = newLi.textContent;
      newLi.textContent = "";

      newLi.appendChild(input);
      input.addEventListener("blur", function () {
        newLi.textContent = this.value;
        newLi.addEventListener("click", func);
      });

      newLi.removeEventListener("click", func);
    });

    document.querySelector("#input1").value = "";
  };
});


// Ex. 4 
let arr4 = [1, 2, 3, 4, 5];
let ul4 = document.querySelector("#elem4");

for (let i = 0; i < arr4.length; i++) {
  let li4 = document.createElement("li");
  li4.textContent = arr4[i];

  let deleteLink1 = document.createElement("a");
  deleteLink1.textContent = "удалить";
  deleteLink1.href = "#";

  deleteLink1.addEventListener("click", function (event) {
    event.preventDefault();
    ul4.removeChild(li4);
  });

  li4.appendChild(deleteLink1);

  ul4.appendChild(li4);
};

let addBtn1 = document.querySelector("#addBtn2");
let newInput1 = document.querySelector("#input2");

addBtn1.addEventListener("click", function () {
  let li4 = document.createElement("li");
  li4.textContent = newInput1.value;

  let deleteLink1 = document.createElement("a");
  deleteLink1.textContent = "удалить";
  deleteLink1.href = "#";

  deleteLink1.addEventListener("click", function (event) {
    event.preventDefault();
    ul4.removeChild(li4);
  });

  li4.appendChild(deleteLink1);

  ul4.appendChild(li4);
  newInput1.value = "";
});


// Ex. 5 
let arr5 = [1, 2, 3, 4, 5];
let ul5 = document.querySelector("#elem5");

function crossOut(event) {
  event.target.classList.toggle("crossed-out");
}

for (let i = 0; i < arr5.length; i++) {
  let li5 = document.createElement("li");
  li5.textContent = arr5[i];

  let crossoutlink = document.createElement("a");
  crossoutlink.textContent = " перечеркнуть";
  crossoutlink.href = "#";
  crossoutlink.addEventListener("click", crossOut);

  // Добавляем ссылку "удалить"
  let deletelink = document.createElement("a");
  deletelink.textContent = " удалить";
  deletelink.href = "#";

  deletelink.addEventListener("click", function (event) {
    event.preventDefault();
    ul5.removeChild(li5);
  });

  li5.appendChild(crossoutlink);
  li5.appendChild(deletelink);
  ul5.appendChild(li5);
};

let addbtn2 = document.querySelector("#addBtn3");
let newinput2 = document.querySelector("#input3");

addbtn2.addEventListener("click", function () {
  let li5 = document.createElement("li");
  li5.textContent = newinput2.value;

  let crossoutlink2 = document.createElement("a");
  crossoutlink2.textContent = " перечеркнуть";
  crossoutlink2.href = "#";
  crossoutlink2.addEventListener("click", crossOut);

  let deletelink2 = document.createElement("a");
  deletelink2.textContent = " удалить";
  deletelink2.href = "#";

  deletelink2.addEventListener("click", function (event) {
    event.preventDefault();
    ul5.removeChild(li5);
  });

  li5.appendChild(crossoutlink2);

  li5.appendChild(deletelink2);

  ul5.appendChild(li5);
  newinput2.value = "";
});


// Ex. 6 
let employees = [
  { name: "employee1", age: 30, salary: 400 },
  { name: "employee2", age: 31, salary: 500 },
  { name: "employee3", age: 32, salary: 600 },
];

let table1 = document.getElementById("table1");

for (let employee of employees) {
  let tr1 = document.createElement("tr");

  let td11 = document.createElement("td");
  td11.textContent = employee.name;
  tr1.appendChild(td11);

  let td12 = document.createElement("td");
  td12.textContent = employee.age;
  tr1.appendChild(td12);

  let td13 = document.createElement("td");
  td13.textContent = employee.salary;
  tr1.appendChild(td13);

  table1.appendChild(tr1);
}; 
