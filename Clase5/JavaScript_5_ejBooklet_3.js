//actividad 3 clase 5

class tienda {
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
    estaAbierto(hora){
        if ((hora >= 8 && hora <= 12) || (hora >= 15 && hora<= 19)){
            return true;
        }
        else {
            return false
        }
    }
}

const tienda1 = new tienda ("a", "b" , "c", "d");
for (let i = 0; i < 3; i++) {
    let entrada = prompt("ingrese un horario en punto: ");

   if (tienda1.estaAbierto(entrada)){
    alert("tienda abierta a las " + entrada)
    }
    
   else {
    alert ("tienda cerrada a las " + entrada)
   } 
}