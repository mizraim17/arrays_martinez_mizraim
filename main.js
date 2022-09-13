///juego de Clue

let selectUser = 0;

const suspectsArray = [
	{ id: 0, nombre: "Michael", apellido: "Scott" },
	{ id: 1, nombre: "Jim", apellido: "Halpert" },
	{ id: 2, nombre: "Dwight", apellido: "Schrute" },
	{ id: 3, nombre: "Pam", apellido: "Beesly" },
	{ id: 4, nombre: "Ryan", apellido: "Howard" },
	{ id: 5, nombre: "Oscar", apellido: "Martinez" },
	{ id: 6, nombre: "Angela", apellido: "Martin" },
	{ id: 7, nombre: "Andy", apellido: "Bernard" },
	{ id: 8, nombre: "Kevin", apellido: "Malone" },
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
	newList = [];
	suspectsArray.splice(numberAssesin, 1);

	for (element in suspectsArray) {
		newList[element] = suspectsArray[element];
	}

	return newList;
};

let genereMistery = () => {
	let asessinMuerdered = [];

	let numberDied = parseInt(doRandom(suspectsArray));

	console.log("nnumero muerto", numberDied);
	let numberAssesin = doRandom(listWithoutAsesin(numberDied));
	console.log("number asesino", numberAssesin);

	asessinMuerdered.push(numberAssesin);
	asessinMuerdered.push(numberDied);

	console.log("asessinMuerdered", asessinMuerdered);

	return asessinMuerdered;
};

let verifyMistery = (asseMurder) => {
	console.log("array asesinos", asseMurder[0]);

	dataMurder = ` el asesino fue ${suspectsArray[asseMurder[0]].nombre} ${
		suspectsArray[asseMurder[0]].apellido
	}
		 		 y mato a ${suspectsArray[asseMurder[1]].nombre} ${
		suspectsArray[asseMurder[1]].apellido
	}

		 	con ${weaponsArray[doRandom(weaponsArray)]},
			en ${roomsArray[doRandom(roomsArray)]}	
		`;

	console.log("dataMurder", dataMurder);

	// alert(`quien fue  ${dataMurder}`);

	return dataMurder;
};

let oportunities = [false, false, false, false];

let menu = (asseMurder) => {
	let coins = 0;

	let fullCase = verifyMistery(asseMurder);

	console.log("muerto menu", asseMurder[1]);
	console.log(
		"muerto menu nombre",
		suspectsArray[parseInt(asseMurder[1])].nombre
	);

	for (element in suspectsArray) {
		console.log(`${element} ${suspectsArray[element].nombre}`);
	}
	do {
		switch (selectUser) {
			case 0:
				let opcion = prompt(
					`Bienvenido a Clue the Office \n mataron a  ${
						suspectsArray[parseInt(asseMurder[1])].nombre
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
				let instructions = "",
					optiAssesin = 0;
				counter = 1;
				listOpWiAss = listWithoutAsesin(parseInt(asseMurder[1]));

				for (element in listOpWiAss) {
					instructions =
						instructions +
						`${counter}.- ${listOpWiAss[element].nombre} ${listOpWiAss[element].apellido} \n`;
					counter++;
				}

				instructions + TXT_1;

				console.log("numero asesino", asseMurder[0]);

				do {
					optiAssesin = parseInt(prompt(`${instructions}`));
					numberAssesin = parseInt(asseMurder[0]);

					// alert(`optiAssesin ${optiAssesin}`);
					// alert(`asseMurder= ${asseMurder[0]}`);

					coins++;

					// alert(`coins=${coins}`);
				} while (optiAssesin !== numberAssesin && coins < 5);

				if (optiAssesin === numberAssesin) {
					alert(`Ganaste fue ${suspectsArray[asseMurder[0]].nombre}`);
					selectUser = "s";
				} else if (coins === 5) {
					alert(`Perdiste fue ${suspectsArray[asseMurder[0]].nombre}`);
					selectUser = "s";
				}

				// alert(`selectUser=  ${selectUser}`);

				break;
			case 2:
				alert("2.-Adivina ");
				break;

			default:
				alert("Opción inválida");
				break;

			case "s":
				break;
		}
	} while (selectUser === "s" || selectUser === "S" || coins < 5);
};

let main = () => {
	let x = genereMistery();
	menu(x);
};

main();

// console.log(suspectsArray[4].nombre);
