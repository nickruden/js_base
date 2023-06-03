// Ex. 1 
let tds1 = document.querySelectorAll("#table1 td");
    let color = "color1";

    for (let td1 of tds1) {
        td1.addEventListener("click", function () {
          if (color == "color1") {
            color = "color2";
          } else {
            color = "color1";
          }

        this.classList.add(color);
    });
};


// Ex. 2 
let tds2 = document.querySelectorAll("#table2 td");
let i = 0;
let colors = ["color1", "color2", "color3"];

for (let td2 of tds2) {
	td2.addEventListener("click", function () {
		this.classList.add(colors[i]);
		i++;
        if (i == colors.length) {
        	i = 0;
        }
    });
}; 
