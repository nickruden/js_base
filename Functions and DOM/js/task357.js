// Ex. 1 
function forEach(selector, func) {
    let elems = document.querySelectorAll(selector);

    for (let i = 0; i < elems.length; i++) {
        func(elems[i], i + 1);
    };
};

forEach('#elem', (elem, index) => {
    elem.innerHTML = index + elem.innerHTML;
}); 
