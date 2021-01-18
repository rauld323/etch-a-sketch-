function makeGrid(){
	for(let i = 0; i < 16; i++){
				let row = document.createElement('div')
				row.className = 'row'
		for(let j = 0; j < 16; j++){
					let column = document.createElement('div')
					row.className = 'column';
					row.appendChild(column);
		}
		document.getElementById('container').appendChild(row);
	}
}

makeGrid();
