// Ex. 1 
let li = document.querySelectorAll('li');
let arr_years = [];
let summ_years = 0;

for (let elem of li) {
    let arr_elem = elem.textContent.split('');
    let summ_elem = 0;

    for (let i of arr_elem) {
        summ_elem += Number(i);
        
        if (summ_elem == 6) {
            arr_years.push(Number(elem.textContent));
        };
    };
};

for (let year of arr_years) {
    summ_years += year;
};

console.log(summ_years); 
