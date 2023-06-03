// Ex. 1 
let lis = document.querySelectorAll("li");

for (let li of lis) {
    li.addEventListener("click", function func() {
        let input = document.createElement("input");
        input.value = li.textContent;

        li.textContent = "";
        li.appendChild(input);

        input.addEventListener("blur", function () {
        	li.textContent = this.value;
        	li.addEventListener("click", func);
        });

        li.removeEventListener("click", func);
    });
};


// Ex. 2 
let tds = document.querySelectorAll("td");

for (let td of tds) {
	td.addEventListener("click", function func() {
    	let input = document.createElement("input");
    	input.value = td.textContent;

    	td.textContent = "";
    	td.appendChild(input);

    	input.addEventListener("blur", function () {
    		td.textContent = this.value;
    		td.addEventListener("click", func);
    	});

    	td.removeEventListener("click", func);
	});
}; 
