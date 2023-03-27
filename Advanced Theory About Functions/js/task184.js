// Ex. 1
let obj1 = {
    func1: function() {return 1},
    func2: function() {return 2},
    func3: function() {return 3},
};
let summobj1 = obj1.func1() + obj1.func2() + obj1.func3();
console.log(summobj1);

// Ex. 2
for (let func in obj1) {
    console.log(obj1[func]())
}

// Ex. 3
let obj2 = {
    summ: function(arrnum) {sumelem = 0; for (let i of arrnum) { sumelem += i}; return sumelem;},
    summ2: function(arrnum) {sumelem = 0; for (let i of arrnum) { sumelem += i ** 2}; return sumelem;},
    summ3: function(arrnum) {sumelem = 0; for (let i of arrnum) { sumelem += i ** 3}; return sumelem;}
}