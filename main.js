///juego de Clue

let selectUser = 0;

const suspectsArray = [
	{ id: 1, nombre: "Michael", apellido: "Scott" },
	{ id: 2, nombre: "Jim", apellido: "Halpert" },
	{ id: 3, nombre: "Dwight", apellido: "Schrute" },
	{ id: 4, nombre: "Pam", apellido: "Beesly" },
	{ id: 5, nombre: "Ryan", apellido: "Howard" },
	{ id: 6, nombre: "Oscar", apellido: "Martinez" },
	{ id: 7, nombre: "Angela", apellido: "Martin" },
	{ id: 8, nombre: "Andy", apellido: "Bernard" },
	{ id: 9, nombre: "Kevin", apellido: "Malone" },
];

const roomsArray = ["Cocina", "Oficina", "Zona de Estacionamiento", "Bodega"];

const weaponsArray = [
	"Olla",
	"Estrella ninja",
	"Parrilla Asadora",
	"Pistola",
	"Engrapadora",
];

let doRandom = (arrSearch) =>
	Math.round(Math.random() * (arrSearch.length - 1));

let genereMistery = () => {
	let numberSuspect = doRandom(suspectsArray);

	let listWithoutAsesin = suspectsArray.splice(numberSuspect, 1);

	let numberDied = doRandom(listWithoutAsesin);

	let caseMurder = [
		`${listWithoutAsesin[numberDied].nombre} ${listWithoutAsesin[numberDied].apellido}`,
		weaponsArray[doRandom(weaponsArray)],
		roomsArray[doRandom(roomsArray)],
		`${suspectsArray[numberSuspect].nombre} ${suspectsArray[numberSuspect].apellido}`,
	];

	return caseMurder;
};

let verifyMistery = () => {
	let mistery = `Mataron a ${suspectsArray[numberSuspect].nombre} ${
		suspectsArray[numberSuspect].apellido
	} con la ${weaponsArray[doRandom(weaponsArray)]} y fue en la ${
		roomsArray[doRandom(roomsArray)]
	} 
	 `;
};

let oportunities = [false, false, false, false];

let menu = (dead) => {
	let coins = 0;

	do {
		switch (selectUser) {
			case 0:
				const OPCION = prompt(
					`Bienvenido a Clue the Office \n mataron a ${
						dead[0]
					} es tu deber adivinar en 5 oportunidades, quién lo mato, con que lo mató y donde lo mató\n 
					${
						oportunities[3] == true
							? `Asesino adivinado`
							: `1.-Adivinar el nombre del asesino\n`
					} ${
						oportunities[2] == true ? `Arma adivinada` : `2. Adivinar Arma\n`
					}${
						oportunities[0] == true ? `Lugar adivinado` : `3. Adivinar Lugar\n`
					} `
				);

			case 1:
				do {
					const intructions = prompt(
						`Adivina el asesino seleciona su número\n
					1.-${dead[0]}
					2.-${dead[1]}
					3.-${dead[2]}
					`
					);

					for (const element in dead) {
						element`${dead[element]}`;
					}
					coins++;
				} while (coins < 5);

				break;
			case 2:
				alert("2.-Adivina ");
				break;

			default:
				alert("Opción inválida");
				break;
		}
	} while (selectUser !== "s" || selectUser !== "S");
};

let main = () => {
	let murder = genereMistery();

	for (element in murder) {
		console.log(`${murder[element]}`);
	}

	menu(murder);
};

main();
