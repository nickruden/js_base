// Ex. 1
let obj1 = {x: 1, y: 2, z: 3};
console.log("Упражнение №1. Вывод элемента объекта по его ключу: " + obj1['x']);

// Ex. 2
let obj2 = {x: 1, y: 2, z: 3};
let key = 'x';
console.log("Упражнение №2. Вывод элемента объекта по ключу из переменной: " + obj2[key]);

// Ex. 3
let obj3 = {x: 1, y: 2, z: 3};
let sum = obj3['x'] + obj3['y'] + obj3['z'];
console.log("Упражнение №3. Сумма всех элементов объекта: " + sum);

// Ex. 4
let obj4 = {x: 1, y: 2, z: 3};
console.log("Упражнение №4. Получаем массив ключей объекта и выводим длину объекта: " + Object.keys(obj4).length);