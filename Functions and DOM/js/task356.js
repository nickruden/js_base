// Ex. 1 
function forEach(selector, func) {
  let elems = document.querySelectorAll(selector);

  for (let elem of elems) {
    func(elem);
  };
};

forEach('#elem', (elem) => {
  elem.innerHTML += '!';
}); 
