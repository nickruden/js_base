// Ex. 1
let arr = [10, 20, 30, 40, 21, 32, 51];
let summ = 0;

for (let i of arr) {
    if (String(i)[0] == '1' || String(i)[0] == '2') {
        summ = summ + Number(i);
    }
}
console.log(summ);