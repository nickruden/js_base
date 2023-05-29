// Ex. 1 
let elem = document.querySelector("#elem");

elem.addEventListener('click', (event) => { 

    if (event.target.tagName == 'LI') {
        event.target.innerHTML += '!';
    } else if (event.target.tagName == 'UL') {
        elem.innerHTML += '<li>text</li>';
    };
}); 
