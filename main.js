const container = document.querySelector("container");

//Clear Screen
function clearScr (){
	container.innerHTML = '';
	let etchSize = prompt("Enter a new grid size no more than 100", 50);
	if (etchSize < 100){
		etchSize = 100
	}
}

