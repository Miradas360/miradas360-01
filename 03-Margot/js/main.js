
let init = () => {
	var chichoVF3 = document.querySelector('#chichoVF3');
	var chichoVF = document.querySelector('#chichoVF');
	var chicho2 = document.querySelector('#chicho2');
	var busquetVF5 = document.querySelector('#busquetVF5');
	var busquetVF4 = document.querySelector('#busquetVF4');
	var busquetVF3 = document.querySelector('#busquetVF3');
	chichoVF3.components.sound.play()
	chichoVF3.addEventListener('sound-ended', () => {
		setTimeout(() => chichoVF.components.sound.play(), 2000 )
		chichoVF.addEventListener('sound-ended', () => {
			setTimeout(() => chicho2.components.sound.play(), 3000 )
			chicho2.addEventListener('sound-ended', () => {
				setTimeout(() => busquetVF5.components.sound.play(), 3000 )
				busquetVF5.addEventListener('sound-ended', () => {
					setTimeout(() => busquetVF4.components.sound.play(), 3000 )
					busquetVF4.addEventListener('sound-ended', () => {
						setTimeout(() => busquetVF3.components.sound.play(), 3000 )
					})
				})
			})
		})
	})
};
setTimeout(init,2000);
