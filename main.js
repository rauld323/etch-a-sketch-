const pixelContainer = document.querySelector("#pixel-container");
const buttonReset = document.querySelector("#button-reset");

window.addEventListener("load", defaultGrid);
buttonReset.addEventListener("click", sizeChange)

function defaultGrid(){
	pixelSize(16)
	pixelGrid(16)
}

function pixelSize(size){
	pixelContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
}

function pixelGrid(size){
	for(let j = 0; j < size * size; j++){
		const pixelElement = document.createElement("div");
		pixelElement.classList = "pixel-element";
		pixelElement.addEventListener("mouseover", colorChange);
		pixelContainer.appendChild(pixelElement);
	}
}

function colorChange(e){
	const blackPixel = 'black';
	e.target.style.backgroundColor = `${blackPixel}`;
}

function sizeChange() {
	let newSize = prompt("Enter new size(Max 100 pixels)");

	if (newSize !== null) {
		newSize = parseInt(newSize);
		if (newSize < 1 || newSize > 100 || Number.isNaN(newSize)) {
			alert("Maximum numbe of pixels is 100");
			sizeChange();
		} else {
			gridClear();
			pixelSize(newSize);
			pixelGrid(newSize);
		}
	}
}

function gridClear() {
	const gridArray = Array.from(pixelContainer.childNodes);
	gridArray.forEach((element) => {
		pixelContainer.removeChild(element);
	});
}
