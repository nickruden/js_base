// Ex. 1 
function func1([name, surename, department, position, byear]) {

};

func1( ['John', 'Smit', 'development', 'programmer', 2000] ); 


// Ex. 2 
function func2([name, surename, ...info]) {

};

func2( ['John', 'Smit', 'development', 'programmer', 2000] ); 


// Ex. 3 
function func3([name, surename, department, position = 'джуниор']) {

};

func3( ['John', 'Smit', 'development'] );


// Ex. 4 
function func4(department, [name, surename], [year, month, day]) {

};

func4( 'development', ['John', 'Smit'], [2018, 12, 31] ); 


// Ex. 5 
function func5({color, width, height}) {

};

func5( {color: 'red', width: 400, height: 500} ); 


// Ex. 6 
function func6({color = 'black', width, height}) {

};

func6( {color: 'red', width: 400, height: 500} ); 
