// Ex. 1 
let elem1 = document.querySelector('#elem1');

elem1.addEventListener('click', (event) => {
    console.log(event.target.tagName);
}); 


// Ex. 2 
let elem2 = document.querySelector('#elem2');

elem2.addEventListener('click', (event) => {
    if (event.target.matches('li')) {
        event.target.innerHTML += '!';
    } else if (event.target.matches('ul')) {
        event.target.innerHTML += '<li>text</li>';
    };
}); 
