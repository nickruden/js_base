// Ex. 1 
function setText(selector, text) {
	let elem = document.querySelector(selector);
	elem.textContent = text;
};

// setText('p', 'text1');
setText('#elem1_2', 'text2');
setText('.elem1_3', 'text3');


// Ex. 2 
function setAttr(selector, attr_name, attr_value) {
    let elem = document.querySelector(selector);
    elem.setAttribute(attr_name, attr_value);
};

setAttr('#inp', 'value', 'input'); 
