// actividad 1 clase 6

class miembro {
    constructor (nombre) {
        this.nombre = nombre
    }
    
}


//const equipo = [new miembro ("Lucas"), new miembro("Lucho"), new miembro("Nicolas"), new miembro("Victor") ]
const equipo = ["juan", "mari", "carlos", "julian"]

/*for (miembros of equipo) {
    console.log(miembros.nombre);
    console.log(equipo.indexOf(equipo["Lucas"]));
}*/

for (let index = 0; index < equipo.length; index++) {
    console.log(` Posicion ${index} Jugador ` + equipo[index]);
}