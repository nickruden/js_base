// Ex. 1 
let elems = document.querySelectorAll("#parent li");

for (let elem of elems) {
	let removeLink1 = document.createElement("a");
    removeLink1.href = "";
    removeLink1.textContent = "удалить";

    elem.appendChild(removeLink1);

    removeLink1.addEventListener("click", function (event) {
        elem.remove();
        event.preventDefault();
    });
};


// Ex. 2 
let rows = document.querySelectorAll("#table tr");

for (let row of rows) {
    let removeLink2 = document.createElement("a");
    removeLink2.href = "";
    removeLink2.textContent = "удалить";

    let cell = document.createElement("td");
    cell.appendChild(removeLink2);
    row.appendChild(cell);

    removeLink2.addEventListener("click", function (event) {
        event.preventDefault();
        row.remove();
    });
}; 
