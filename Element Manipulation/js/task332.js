// Ex. 1 
let elem1 = document.querySelector('#elem1');
let p1 = document.createElement('p');
p1.innerHTML = '!!!';

elem1.insertAdjacentElement('beforebegin', p1);


// Ex. 2 
let elem2 = document.querySelector('#elem2');
let p2 = document.createElement('p');
p2.innerHTML = '!!!';

elem2.insertAdjacentElement('afterend', p2);


// Ex. 3 
let elem3 = document.querySelector('#elem3');
let p3 = document.createElement('p');
p3.innerHTML = '!!!';

elem3.insertAdjacentElement('afterbegin', p3);


// Ex. 4 
let elem4 = document.querySelector('#elem4');
let p4 = document.createElement('p');
p4.innerHTML = '!!!';

elem4.insertAdjacentElement('beforeend', p4);


// Ex. 5 
let elem5 = document.querySelector('#elem5');

elem5.insertAdjacentHTML('beforebegin', '<div class="www"><p>text</p><p>text</p><input></div>'); 
