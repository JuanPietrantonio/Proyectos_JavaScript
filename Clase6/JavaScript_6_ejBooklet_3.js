// Clase 6 actividad 3

class jugador {
    constructor (nombre, camiseta, edad, lesion) {
        this.nombre = nombre;
        this.camiseta = camiseta;
        this.edad = edad;
        this.lesion = false;
    }
}

const equipoPlantel = [];

let equipoCantidad = prompt("Cuantos juadores son?: ");

for (i = 0; i < equipoCantidad; i++){
    //let jugadorName = prompt("Ingrese el nombre del jugador: ");
    let jugadorDatos = new jugador (prompt("Ingrese el nombre del jugador: "), prompt("Ingrse el numero de camiseta del jugador"), prompt("Ingese edad"), prompt("ingrese lesion"))
    equipoPlantel.push(jugadorDatos);
}

console.log(equipoPlantel);
