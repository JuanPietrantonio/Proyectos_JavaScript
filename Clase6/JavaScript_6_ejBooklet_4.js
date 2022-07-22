// Clase 6 actividad 4 no me salio

class jugador {
    constructor (nombre, camiseta, edad, lesion) {
        this.nombre = nombre;
        this.camiseta = camiseta;
        this.edad = edad;
        this.lesion = false;
    }
}

const equipoPlantel = [];
const jugador1 = new jugador ("carlos", "2", 30, "false");
const jugador2 = new jugador ("juampi", "3", 25, "false");
const jugador3 = new jugador ("mari", "4", 20, "false");
const jugador4 = new jugador ("tano", "5", 15, "false");

equipoPlantel.push(jugador1);
equipoPlantel.push(jugador2);
equipoPlantel.push(jugador3);
equipoPlantel.push(jugador4);

console.log(equipoPlantel);

function buscarJugador(equipo, jugador) {
    return equipo.find(objeto => objeto.nombre === jugador.toUpperCase());
}

for (i = 0; i < 3; i++) {
    let busqueda = buscarJugador(equipoPlantel, prompt("Que jugador desea buscar?:"));
    if (busqueda != undefined){
        console.log("el jugador es " + busqueda.nombre);
    }
    else {
        console.log(`No se encontro al jugador`);
    }
}



/*buscarJugador(equipo, jugador) {
    for (i = 0; i < 3; i++){
        return equipo.find(jugador);
        console.log(jugador.nombre);
    }
}*/