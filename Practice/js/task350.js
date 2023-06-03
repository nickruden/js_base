// Ex. 1 
let elem = document.querySelector("#elem");
let button = document.querySelector("#btn");

button.addEventListener("click", function () {
    if (elem.classList.contains("hidden")) {
        elem.classList.remove("hidden");
        button.value = "hide";
    } else {
        elem.classList.add("hidden");
        button.value = "show";
    }
}); 
