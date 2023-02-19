/* Ex. 1 
let obj = {x: 1, y: 2, z: 3};
delete obj.x;

console.log('x' in obj); */
let obj = {x: 1, y: 2, z: 3};
delete obj.x;

console.log('x' in obj);
alert("Упражнение №1. В консоль выведется false, так как сначала мы удалили элемент 'x' из объекта, а после делаем проверку на его существование.")