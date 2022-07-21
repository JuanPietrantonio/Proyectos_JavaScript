// Clase 6 actividad 2



const list = [];

while (name != "ESC"){
    name = prompt("Ingrese el nombre del jugador, al finalizar la lista ingrese ESC para ver la lista final");
    if (name == "ESC"){
        break;

    }
    list.push(name);
}

for (let player = 0; player < list.length; player++) {
    console.log(`El jugador ${list[player]} tiene la posicion ${player}`)
}

//console.log (list)