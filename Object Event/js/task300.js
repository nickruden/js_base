// Ex. 1 
let elem = document.querySelector('#elem');
elem.addEventListener('mousemove', (event) => elem.innerHTML = event.pageX + ' : ' + event.pageY); 
