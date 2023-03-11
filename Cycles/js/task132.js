// Ex. 1
let str = "12225534114";
let countobj = {};

for (let i of str) {
    if (countobj[i] == undefined) {
        countobj[i] = 1;
    } else {
        countobj[i] += 1;
    }
}
console.log(countobj);