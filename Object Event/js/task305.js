// Ex. 1 
let links1 = document.querySelectorAll('#link1');

for (let link of links1) {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        link.innerHTML += link.href;
    }
)};


// Ex. 2 
let inp2_1 = document.querySelector('#inp2_1');
let inp2_2 = document.querySelector('#inp2_2');
let elem2 = document.querySelector('#elem2');
let link = document.querySelector('#link2');

link.addEventListener('click', (event) => {
    let summ_inps;
    summ_inps = Number(inp2_1.value) + Number(inp2_2.value);
    elem2.innerHTML = summ_inps;
    event.preventDefault();
}); 
