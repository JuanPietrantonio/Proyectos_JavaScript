//actividad 4 clase 5

class tienda {
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
    esPropietario(nombre){
        return this.propietario == nombre;
    }
}

const tienda1 = new tienda ("tienda a", "b", "Carlos", "c")
const tienda2 = new tienda ("tienda b", "b", "Carlos", "c")
const tienda3 = new tienda ("tienda c", "b", "Mari", "c")

function pedirEntrada() {
    let entrada = prompt("ingrese el nombre de propietario a buscar: ");
   
    if (tienda1.esPropietario(entrada)){
        alert (entrada + " es propietario de " + tienda1.nombre)
    }
    if (tienda2.esPropietario(entrada)){
        alert (entrada + " es propietario de " + tienda2.nombre)
    }
    if (tienda3.esPropietario(entrada)){
        alert (entrada + " es propietario de " + tienda3.nombre)
    }
    //si aca pongo else, me tira error siempre que el ultimo if no se cumpla, si pongo else if tambien hay error y si no pongo nada nunca me da mensaje para decirme que no hay propietario, ver mas adelante
}
for (let i = 0; i < 3; i++) {
    pedirEntrada();
}


//Otra posibilidad de hacerlo directo en el for sin una funcion definida antes
/*for (let i = 0; i < 3; i++) {
    let entrada = prompt("ingrese el nombre de propietario a buscar: ");
    if (tienda1.esPropietario(entrada)){
        alert (entrada + " es propietario")
    }
    else {
        alert (entrada + " no es propietario")

    }
}
*/