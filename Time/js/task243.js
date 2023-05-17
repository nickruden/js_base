// Ex. 1 
let date = new Date();
let date_old = new Date(2000, 0, 1);
count = 0;

for (let year = date_old.getFullYear(); year <= date.getFullYear(); year++) {
    let date = new Date(year, 0, 1);

    if (date.getDay() == 0 || date.getDay() == 6) {
        count += 1;
    };
};

console.log(count);
