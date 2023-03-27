let arr1 = ['Cześć', 'Żegnaj', 'Witaj', 'Do zobaczenia'];
let arr2 = ['świecie', 'przyjacielu', 'nieznajomy', 'wrogu'];
let arr3 = ['?', '!', '.', '...'];

let img = document.getElementById('postac');
let text = document.getElementById('text');
let button = document.getElementById('button');

let czesc = document.getElementById('1.czesc');
let zegnaj = document.getElementById('1.zegnaj');
let witaj = document.getElementById('1.witaj');
let do_zobaczenia = document.getElementById('1.do_zobaczenia');

let swiecie = document.getElementById('2.swiecie');
let przyjacielu = document.getElementById('2.przyjacielu');
let nieznajomy = document.getElementById('2.nieznajomy');
let wrogu = document.getElementById('2.wrogu');

let swiecie_pytanie = document.getElementById('2.swiecie_pytanie');
let przyjacielu_pytanie = document.getElementById('2.przyjacielu_pytanie');
let nieznajomy_pytanie = document.getElementById('2.nieznajomy_pytanie');
let wrogu_pytanie = document.getElementById('2.wrogu_pytanie');

let swiecie_wykrzyknik = document.getElementById('2.swiecie_wykrzyknik');
let przyjacielu_wykrzyknik = document.getElementById('2.przyjacielu_wykrzyknik');
let nieznajomy_wykrzyknik = document.getElementById('2.nieznajomy_wykrzyknik');
let wrogu_wykrzyknik = document.getElementById('2.wrogu_wykrzyknik');

let audioFirst = document.querySelectorAll('.first');
let audioSecond = document.querySelectorAll('.second');

function randomElement(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function randomText() {
	return randomElement(arr1) + ' ' + randomElement(arr2) + randomElement(arr3);
}

button.addEventListener('click', function () {
	// Generate random sentence and animate gif
	text.textContent = randomText();
	img.src = 'talk.gif';

	// Show text and stop gif animation after last audio file has finished
	audioFirst.forEach((item) => {
		item.onplaying = function () {
			text.classList.add('show');
		};
	});

	audioSecond.forEach((item) => {
		item.onended = function () {
			text.classList.remove('show');

			img.src = 'stop.png';
		};
	});

	// Stop gif animation after 2s
	setTimeout(function () {
		img.src = 'stop.png';
	}, 2000);

	// Play first part of audio file
	if (text.textContent.includes('Cześć')) {
		czesc.play();
	}

	if (text.textContent.includes('Żegnaj')) {
		zegnaj.play();
	}

	if (text.textContent.includes('Witaj')) {
		witaj.play();
	}

	if (text.textContent.includes('Do zobaczenia')) {
		do_zobaczenia.play();
	}

	// Play second part of audio file after 1s delay
	if (text.textContent.includes('świecie')) {
		setTimeout(function () {
			if (text.textContent.includes('?')) {
				swiecie_pytanie.play();
			} else if (text.textContent.includes('!')) {
				swiecie_wykrzyknik.play();
			} else {
				swiecie.play();
			}
		}, 1000);
	}

	if (text.textContent.includes('przyjacielu')) {
		setTimeout(function () {
			if (text.textContent.includes('?')) {
				przyjacielu_pytanie.play();
			} else if (text.textContent.includes('!')) {
				przyjacielu_wykrzyknik.play();
			} else {
				przyjacielu.play();
			}
		}, 1000);
	}
	if (text.textContent.includes('nieznajomy')) {
		setTimeout(function () {
			if (text.textContent.includes('?')) {
				nieznajomy_pytanie.play();
			} else if (text.textContent.includes('!')) {
				nieznajomy_wykrzyknik.play();
			} else {
				nieznajomy.play();
			}
		}, 1000);
	}
	if (text.textContent.includes('wrogu')) {
		setTimeout(function () {
			if (text.textContent.includes('?')) {
				wrogu_pytanie.play();
			} else if (text.textContent.includes('!')) {
				wrogu_wykrzyknik.play();
			} else {
				wrogu.play();
			}
		}, 1000);
	}
});
