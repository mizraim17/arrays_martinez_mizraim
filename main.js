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

let listWithoutAsesin = (numberAssesin) => {
	alert("numberAssesin", numberAssesin);

	newList = [];
	suspectsArray.splice(numberAssesin, 1);

	for (element in suspectsArray) {
		newList[element] = suspectsArray[element];

		console.log(newList[element]);
	}

	return newList;
};

let genereMistery = () => {
	let asessinMuerdered = [];

	let numberAssesin = parseInt(doRandom(suspectsArray));

	let numberDied = doRandom(listWithoutAsesin(numberAssesin));

	console.log("numberDied", numberDied);

	asessinMuerdered.push(numberAssesin);
	asessinMuerdered.push(numberDied);

	return asessinMuerdered;
};

let verifyMistery = (asseMurde) => {
	console.log("array asesinos", asseMurde[0]);

	dataMurder = [
		`${suspectsArray[asseMurde[0]].nombre} ${
			suspectsArray[asseMurde[0]].apellido
		}`,
		`${suspectsArray[asseMurde[1]].nombre} ${
			suspectsArray[asseMurde[1]].apellido
		}`,

		weaponsArray[doRandom(weaponsArray)],
		roomsArray[doRandom(roomsArray)],
	];

	console.log("dataMurder", dataMurder);

	return dataMurder;
};

let oportunities = [false, false, false, false];

let menu = (asseMurde) => {
	let coins = 0;

	let fullCase = verifyMistery(asseMurde);

	do {
		switch (selectUser) {
			case 0:
				const OPCION = prompt(
					`Bienvenido a Clue the Office \n mataron a  ${
						suspectsArray[parseInt(asseMurde[1])].nombre
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
				const TXT_1 = "Adivina el asesino seleciona su número";
				let instructions = "";
				conter = 1;

				listOpWiAss = listWithoutAsesin(parseInt(asseMurde[1]));

				alert("listOpWiAss", listOpWiAss);

				debugger;

				for (element in listOpWiAss) {
					instructions =
						instructions +
						`${conter}.- ${listOpWiAss[element].nombre} ${listOpWiAss[element].apellido} \n`;
					conter++;
				}

				instructions + TXT_1;

				console.log("instructions", instructions);

				do {
					const intructions = prompt(
						` ${instructions}
					`
					);

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
	let x = genereMistery();
	menu(x);
};

main();

// genereMistery();

// console.log("->", suspectsArrayz.splice(4, 1));

// let arrz = [];

// for (element in suspectsArrayz) {
// 	arrz[element] = suspectsArrayz[element];
// }

// console.log("===>", arrz);
