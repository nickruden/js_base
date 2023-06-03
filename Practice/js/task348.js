// Ex. 1 
let elems = document.querySelectorAll("#parent1 p");

for (let elem of elems) {
    let removelink1 = document.createElement("a");

    removelink1.href = "";
    removelink1.textContent = "удалить";

    elem.appendChild(removelink1);

    removelink1.addEventListener("click", function (event) {
        elem.remove();
        event.preventDefault();
    });

    let spans = elem.querySelectorAll("span");

    for (let span1 of spans) {
        span1.addEventListener("click", function func() {
        let input1 = document.createElement("input");

        input1.value = span1.textContent;
        span1.textContent = "";

        span1.appendChild(input1);

        input1.addEventListener("blur", function () {
            span1.textContent = this.value;
            span1.addEventListener("click", func);
        });

        span1.removeEventListener("click", func);
        });
    }
};


// Ex. 2 
let ps = document.querySelectorAll("#parent2 p");

for (let p of ps) {
    let span2 = document.createElement("span");
    span2.textContent = p.textContent;

    p.textContent = "";
    p.appendChild(span2);

    span2.addEventListener("click", function func() {
        let input2 = document.createElement("input");
        input2.value = span2.textContent;

        span2.textContent = "";
        span2.appendChild(input2);

        input2.addEventListener("blur", function () {
        	span2.textContent = this.value;
            span2.addEventListener("click", func);
        });

          span2.removeEventListener("click", func);
    });

    let removelink2 = document.createElement("a");
    removelink2.href = "";

    removelink2.textContent = "удалить";
    p.appendChild(removelink2);

    removelink2.addEventListener("click", function (event) {
        p.remove();
        event.preventDefault();
	});
}; 
