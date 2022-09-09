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
	let numberSupect = doRandom(suspectsArray);

	let mistery = `Mataron a ${suspectsArray[numberSupect].nombre} ${
		suspectsArray[numberSupect].apellido
	} con la ${weaponsArray[doRandom(weaponsArray)]} y fue en la ${
		roomsArray[doRandom(roomsArray)]
	} 
	 `;

	return mistery;
};

let verifyMistery = () => {};

let mistery = [{ asesinFound: true }];

let main = () => {
	do {
		switch (selectUser) {
			case 0:
				const OPCION = prompt(
					`Bienvenido, seleccione una opción (ESC para salir)\n${
						mistery[0].asesinFound == true
							? `Asesino adivinado`
							: ` 1.-Adivinar el nombre del asesino`
					}  \n2. Adivinar Arma \n3. Adivinar lugar \n4. Adivinar Asesinado   \n 5.- Para salir`
				);

			case 1:
				alert();
				break;
			case 2:
				alert("2.-Adivina ");
				break;

			default:
				alert("Opción inválida");
				break;
		}
	} while (option !== "s" || option !== "S");
};

genereMistery();
main();
