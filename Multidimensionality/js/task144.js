// Ex. 1
let obj1 = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}
let summobj1 = 0;

for (let i in obj1) {
    let i1 = obj1[i];

    for (let j in i1) {
        summobj1 += i1[j]
    }
}
console.log("1) " + summobj1);


// Ex. 2
let obj2 = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
		},
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
}
let summobj2 = 0;

for (let i in obj2) {
    let i1 = obj2[i];

    for (let j in i1) {
        let j1 = i1[j];

        for (let k in j1) {
            summobj2 += j1[k]
        }
    }
};
console.log("3) " + summobj2);