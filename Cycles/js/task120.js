// Ex. 1
for (let i = 10; i <= 1000; i++) {
    i = String(i);
    console.log('1) ' + i[0]);
}

// Ex. 2
for (let i = 10; i <= 1000; i++) {
    i = String(i);
    console.log('2) ' + (Number(i[0]) + Number(i[1])));
}

// Ex. 3
for (let i = 10; i <= 1000; i++) {
    i = String(i);
    if (i[0] === '1') {
        console.log('3) ' + i);
    }
}

// Ex. 4
for (let i = 10; i <= 1000; i++) {
    i = String(i);
    if ((Number(i[0]) + Number(i[1]) === 5)) {
        console.log('4) ' + i);
    }
}