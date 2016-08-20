var customEvents = {
	start: {
		escena1: new Event('escena1'),
		escena2: new Event('escena2'),
		escena3: new Event('escena3'),
		escena4: new Event('escena4')
	},
}

let init = () => {
	var escena1 = document.querySelector('#escena1');
	var escena2 = document.querySelector('#escena2');
	var escena3 = document.querySelector('#escena3');
	var escena4 = document.querySelector('#escena4');

	var circulo = document.querySelector('#circulo');
	var chichoVF3 = document.querySelector('#chichoVF3');
	var chichoVF = document.querySelector('#chichoVF');
	var chicho2 = document.querySelector('#chicho2');
	var busquetVF5 = document.querySelector('#busquetVF5');
	var busquetVF4 = document.querySelector('#busquetVF4');
	var busquetVF3 = document.querySelector('#busquetVF3');
	circulo.addEventListener('click', () => {
		document.querySelector('#circulo').emit('hideMeNow');
		
		escena2.dispatchEvent(customEvents.start.escena2)
		chichoVF3.components.sound.stop()
	})
	escena1.addEventListener('escena1', () => {
		setTimeout(() => chichoVF3.components.sound.play(), 2000 )
		chichoVF3.addEventListener('sound-ended', () => {
			setTimeout(() => escena2.dispatchEvent(customEvents.start.escena2), 3000 )
		})
	})

	escena2.addEventListener('escena2', () => {
		setTimeout(() => chichoVF.components.sound.play(), 2000 )
		chichoVF.addEventListener('sound-ended', () => {
			setTimeout(() => chicho2.components.sound.play(), 3000 )
		})
		chicho2.addEventListener('sound-ended', () => {
			setTimeout(() => escena3.dispatchEvent(customEvents.start.escena3), 3000 )
		})
	})

	escena3.addEventListener('escena3', () => {
		setTimeout(() => busquetVF5.components.sound.play(), 3000 )
		busquetVF5.addEventListener('sound-ended', () => {
			setTimeout(() => escena4.dispatchEvent(customEvents.start.escena4), 3000 )
		})
	})

	escena3.addEventListener('escena3', () => {
		setTimeout(() => busquetVF4.components.sound.play(), 3000 )

		busquetVF4.addEventListener('sound-ended', () => {
			setTimeout(() => busquetVF3.components.sound.play(), 3000 )
		})
	})

	escena1.dispatchEvent(customEvents.start.escena1)
};
setTimeout(init,2000);
