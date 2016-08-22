let init = () => {
	var escena1 = document.querySelector('#escena1');
	var escena2 = document.querySelector('#escena2');
	var escena3 = document.querySelector('#escena3');
	var escena4 = document.querySelector('#escena4');

	var intro = document.querySelectorAll('.intro')
	var circulo = document.querySelector('#circulo');
	var circulo2 = document.querySelector('#circulo2');
	var chichoVF3 = document.querySelector('#chichoVF3');
	var chichoVF = document.querySelector('#chichoVF');
	var chicho2 = document.querySelector('#chicho2');
	var busquetVF5 = document.querySelector('#busquetVF5');
	var busquetVF4 = document.querySelector('#busquetVF4');
	var busquetVF3 = document.querySelector('#busquetVF3');

	var circuloClick = () => {
		circulo.emit('hide');
		escena2.emit('escena2')
		chichoVF3.components.sound.stop()
		circulo.removeEventListener('click', circuloClick )
	}
	circulo.addEventListener('click', circuloClick )
	circulo2.addEventListener('click', () => {
		escena4.emit('escena4')
		busquetVF5.components.sound.stop()
		circulo2.emit('hide');
	})
	escena1.addEventListener('escena1', () => {
		intro.forEach(x => x.emit('hide'));

		setTimeout(() => chichoVF3.components.sound.play(), 2000 )
		chichoVF3.addEventListener('sound-ended', () => {
			circulo.emit('show')
			setTimeout(() => escena2.emit('escena2') && circulo.emit('hide'), 7000 )
		})
	})

	escena2.addEventListener('escena2', () => {
		escena1.emit('escena2')
		setTimeout(() => chichoVF.components.sound.play(), 2000 )
		chichoVF.addEventListener('sound-ended', () => {
			setTimeout(() => chicho2.components.sound.play(), 1000 )
		})
		chicho2.addEventListener('sound-ended', () => {
			setTimeout(() => escena3.emit('escena3'), 1000 )
		})
	})

	escena3.addEventListener('escena3', () => {
		escena2.emit('escena3')
		setTimeout(() => busquetVF5.components.sound.play(), 1000 )
		busquetVF5.addEventListener('sound-ended', () => {
			circulo2.emit('show');
			setTimeout(() => escena4.emit('escena4') && circulo2.emit('hide'), 7000 )
		})
	})

	escena4.addEventListener('escena4', () => {
		escena3.emit('escena4')
		setTimeout(() => busquetVF4.components.sound.play(), 3000 )
		busquetVF4.addEventListener('sound-ended', () => {
			setTimeout(() => busquetVF3.components.sound.play(), 1000 )
		})
		busquetVF3.addEventListener('sound-ended', () => {
			escena4.emit('creditos')
			setTimeout(() => intro.forEach(x => x.emit('show')), 6000 )
		})
	})

	setTimeout(function () {
		escena1.emit('escena1')
	}, 10000);
};
setTimeout(init,2000);
