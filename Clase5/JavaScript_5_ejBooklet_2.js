//actividad 2 clase 5 con 3 tiendas porque 5 es mucho

class tienda {
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
    publicidad(){
        console.log("La tienda ingresada es " + this.nombre + ", " + this.direccion + ", " + this.propietario + ", " + this.rubro);
    }
}


const tienda1 = new tienda (prompt("ingrese el nombre de la tienda"), prompt("ingrese la direccion de la tienda"), prompt("ingrese el propietario de la tienda"), prompt("ingrese el rubro de la tienda"))
const tienda2 = new tienda (prompt("ingrese el nombre de la tienda"), prompt("ingrese la direccion de la tienda"), prompt("ingrese el propietario de la tienda"), prompt("ingrese el rubro de la tienda"))
const tienda3 = new tienda (prompt("ingrese el nombre de la tienda"), prompt("ingrese la direccion de la tienda"), prompt("ingrese el propietario de la tienda"), prompt("ingrese el rubro de la tienda"))

tienda1.publicidad();
tienda2.publicidad();
tienda3.publicidad();