// Ex. 1 
;(function (selector1, selector2, selector3, selector4) {
  let btn = document.querySelector(selector1);
  let inp1 = document.querySelector(selector2);
  let inp2 = document.querySelector(selector3);
  let inp3 = document.querySelector(selector4);

  btn.addEventListener('click', () => console.log(Number(inp1.value) + Number(inp2.value) + Number(inp3.value)));

})('#btn', '#inp1', '#inp2', '#inp3'); 
