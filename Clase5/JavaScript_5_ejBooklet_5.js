//actividad 5 clase 5


class cliente {
    constructor (nombre, presupuesto, descuento, telefono){
        this.nombre = nombre;
        this.presupuesto = presupuesto;
        this.descuento = descuento;
        this.telefono = telefono;
    }
    transferirDinero(valor){
        if (valor <= this.presupuesto){
            return true
        }
        else {
            return false
        }
    }
}

const cliente1 = new cliente ("Carlos", 100 , false, 123)
const cliente2 = new cliente ("Juampi", 120 , true, 456)
const cliente3 = new cliente ("Mari", 80 , true, 789)

function evaluarPresupuesto(){
    let valor = prompt("Ingrese el presupuesto a verificar: ");
    if (cliente1.transferirDinero(valor) == true){
        alert (cliente1.nombre + " Cuenta con el presupuesto necesario");
    }
    else if (cliente1.transferirDinero(valor) == false){
        alert (cliente1.nombre + " No cuenta con el presupuesto necesario");
    }
    if (cliente2.transferirDinero(valor) == true){
        alert (cliente2.nombre + " Cuenta con el presupuesto necesario");
    }
    else if (cliente2.transferirDinero(valor) == false){
        alert (cliente2.nombre + " No cuenta con el presupuesto necesario");
    }
    if (cliente3.transferirDinero(valor) == true){
        alert (cliente3.nombre + " Cuenta con el presupuesto necesario");
    }
    else if (cliente3.transferirDinero(valor) == false){
        alert (cliente3.nombre + " No cuenta con el presupuesto necesario");
    }
    
}

for (let i = 0; i < 3; i++){
    evaluarPresupuesto();
}
