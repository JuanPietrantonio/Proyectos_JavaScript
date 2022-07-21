//actividad 1 clase 5

class tienda {
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
    publicidad(){
        console.log("Nuestra tienda es " + this.nombre + ", " + this.direccion + ", " + this.propietario + ", " + this.rubro);
    }
}

const tienda1 = new tienda ("Apu", "yrigoyen 2020", "Nicolas", "Metal" );
const tienda2 = new tienda ("a", "b", "c", "d");
const tienda3 = new tienda ("e", "fe", "ge", "he");


console.log(tienda1);
console.log(tienda2);
console.log(tienda3);

tienda1.publicidad();
tienda2.publicidad();
tienda3.publicidad();