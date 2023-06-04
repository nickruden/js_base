// Ex. 1 
;(function () {
    function avg1(arr) {
	    return sum(arr, 1) / arr.length;
    }

    function avg2(arr) {
	    return sum(arr, 2) / arr.length;
    }

    function avg3(arr) {
	    return sum(arr, 3) / arr.length;
    }

    // вспомогательная функция
    function sum(arr, pow) {
	    let res = 0;
	
	    for (let elem of arr) {
		    res += elem ** pow;
	    }
	
	    return res;
    }

    window.arr = {avg1, avg2, avg3};
})();


// Ex. 2 
(function () {
    function shuffle(array) {
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }

    function size(object) {
      return Object.keys(object).length;
    }

    function last(array) {
      return array[array.length - 1];
    }

    function rest(array, n) {
      return Array.prototype.slice.call(array, n || 1);
    }

    function keys(object) {
      let keys = [];
      for (let key in object) {
        if (object.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
      return keys;
    }

    function clone(object) {
      return JSON.parse(JSON.stringify(object));
    }

    function isMatch(object, properties) {
      let keys = Object.keys(properties);
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (object[key] !== properties[key]) {
          return false;
        }
      }
      return true;
    }

    function now() {
      return new Date().getTime();
    }

    window.myUnderscore = {shuffle, size, last, rest, keys, clone, isMatch, now};
})();

console.log(myUnderscore.shuffle([1, 2, 3, 4, 5]));
console.log(myUnderscore.size({ name: "John", age: 30, city: "New York" }));
console.log(myUnderscore.last(["apple", "banana", "cherry"]));
console.log(myUnderscore.rest([1, 2, 3, 4, 5], 2));
console.log(myUnderscore.keys({ name: "John", age: 30, city: "New York" }));
console.log(myUnderscore.clone({ name: "John", age: 30, city: "New York" }));
console.log(myUnderscore.isMatch(
    { name: "John", age: 30, city: "New York" },
    { age: 30 }));
console.log(myUnderscore.now()); 
