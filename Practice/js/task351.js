// Ex. 1 
let lis1 = document.querySelectorAll("#elem1 li");

    for (let li1 of lis1) {
        li1.addEventListener("click", function () {
        this.classList.add("active");
    });
};


// Ex. 2 
let lis2 = document.querySelectorAll("#elem2 li");

    for (let li2 of lis2) {
    li2.addEventListener("click", function () {
        if (this.classList.contains("active")) {
        this.classList.remove("active");
        } else {
        this.classList.add("active");
        }
    });
}; 
