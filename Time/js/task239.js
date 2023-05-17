let date = new Date();

// Ex. 1 
let month_0 = new Date(date.getFullYear(), 0, 1);
let month_8 = new Date(date.getFullYear(), 8, 10);

console.log(((month_8 - month_0)/1000/60/60/24));


// Ex. 2 
let month_now = new Date(date.getFullYear(), date.getMonth(), 20);
let month_next = new Date(date.getFullYear(), date.getMonth() + 1, 10);

console.log(((month_next - month_now)/1000/60/60/24));
