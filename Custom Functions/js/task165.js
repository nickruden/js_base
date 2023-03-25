// Ex. 1
function mathdiv (num) {
    let count = 0;

    while (true) {
        num = num / 2;
        count +=1;

        if (num < 10) {
            return count;
        }
    }
}
console.log(mathdiv(40)); 