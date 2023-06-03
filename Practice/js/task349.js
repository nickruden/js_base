// Ex. 1 
let p1 = document.querySelectorAll("p");

p1.forEach(function (p1) {
	let link1 = document.createElement("a");

	link1.textContent = "Перечеркнуть текст";
	link1.href = "#";

	link1.addEventListener("click", function (event) {
    	event.preventDefault();
    	p1.style.textDecoration = "line-through";
	});

	p1.appendChild(link1);
});


// Ex. 2 
let p2 = document.querySelectorAll("p");

p2.forEach(function (p2) {
    let link2 = document.createElement("a");

    link2.textContent = "Перечеркнуть текст";
    link2.href = "#";

    link2.addEventListener("click", function (event) {
        event.preventDefault();
        p2.style.textDecoration = "line-through";
        link2.remove();
    });

    p2.appendChild(link2);
});


// Ex. 3 
let cells1 = document.querySelectorAll("td");
let rows1 = document.querySelectorAll("tr");

for (let cell1 of cells1) {
    cell1.addEventListener("click", function () {
        let input1 = document.createElement("input");
        input1.value = cell1.textContent;

        cell1.textContent = "";
        cell1.appendChild(input1);

        input1.addEventListener("blur", function () {
        	cell1.textContent = this.value;
            cell1.addEventListener("click", func);
        });

        cell1.removeEventListener("click", func);
    });
};

for (let row1 of rows1) {
    let link1 = document.createElement("a");
    link1.href = "#";
    link1.textContent = "Click me!";

    row1.appendChild(document.createElement("td")).appendChild(link1);

    link1.addEventListener("click", function () {
        row1.style.backgroundColor = "green";
    });
};


// Ex. 4 
let cells2 = document.querySelectorAll("td");
let rows2 = document.querySelectorAll("tr");

    for (let cell2 of cells2) {
    cell2.addEventListener("click", function () {
        let input2 = document.createElement("input");
        input2.value = cell2.textContent;

        cell2.textContent = "";
        cell2.appendChild(input2);

        input2.addEventListener("blur", function () {
        	cell2.textContent = this.value;
            cell2.addEventListener("click", func);
        });

        cell2.removeEventListener("click", func);
    });
};

for (let row2 of rows2) {
	let link2 = document.createElement("a");
    link2.href = "#";
    link2.textContent = "click me!";

    let clicked = false;

    link2.addEventListener("click", function () {
        if (!clicked) {
            row2.style.backgroundColor = "green";
            clicked = true;
        } else {
            row2.style.backgroundColor = "";
            clicked = false;
        }
    });

    row2.appendChild(document.createElement("td")).appendChild(link2);
}; 
