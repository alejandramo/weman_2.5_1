//Esta variable guarda una referencia al control de resultado, se declara global para no tener que estar ejecutando document.getElementById en cada ocasión que se necesite
let ctrlMostrado = document.getElementById('salida');

function dibujaTarjetas(arreglo) {
	let imprime = "<table id='registro'><tr><th>Habitación</th><th>Huesped</th></tr>";
	//La siguiente estructura de for es casi ya un arcaísmo. Sin embargo, los clásicos nunca mueren.
	for (let i = 0; i < arreglo.length; i++) {
		imprime += "<tr><td>" + arreglo[i].numHabitacion + "</td><td>" + arreglo[i].nombreHuesped + "</td></tr>";
	}
	imprime += "</table>"
	ctrlMostrado.innerHTML = imprime;
}

function ordenaPorHabitacion(arreglo) {
	//En esta función escribe la función que ordenará el arreglo por habitación
}

function ordenaPorHuesped(registro) {
	//1. Llamar a la variable registro
	//2. Hacer sort de la variable 
	var registro = [
		{numHabitacion: "87", nombreHuesped: "Donna Noble"},
		{numHabitacion: "34", nombreHuesped: "Jean Luc Piccard"},
		{numHabitacion: "23", nombreHuesped: "Deana Troi"},
		{numHabitacion: "12", nombreHuesped: "Christpher Pike"},
		{numHabitacion: "67", nombreHuesped: "Amy Pond"},
		{numHabitacion: "45", nombreHuesped: "Miyamoto Musashi"},
		{numHabitacion: "93", nombreHuesped: "Amelia Earhart"},
		{numHabitacion: "47", nombreHuesped: "Katherin Janeway"}
	];
	function ordenarAsc(p_array_json, p_key) {
		p_array_json.sort(function (a, b) {
		   return a[p_key] > b[p_key];
		});
	 }
	//Acá puedes hacer la otra que ordene por el nombre del huesped

}

