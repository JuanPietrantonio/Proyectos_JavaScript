// DOM y eventos entrega

class venta {
    constructor (turno, producto, cuota) {
        this.turno =  turno;
        this.producto = producto;
        this.cuota = cuota;
    }
}


const ventas = [
    new venta ("1", "GP Classic", "Cuota Pura"),
    new venta ("2", "GP Advance", "Cuota Pura"), 
    new venta ("1", "GP Classic",  "50% descuento"), 
    new venta("2", "GP Classic", "Primer mes bonificado")];

///

function crearBotonDetalle () {
    const botonDetalle = document.createElement("button");
    botonDetalle.innerText = "Ver detalle";
    botonDetalle.addEventListener("click", () => {
        mostrarVentas(ventas);
    })
    document.getElementById("bodyDiv").prepend(botonDetalle);
}

crearBotonDetalle ();

function mostrarVentas(ventas) {
    const contenedorVentas = document.getElementById("bodyDiv");
    contenedorVentas.innerHTML = "";

    ventas.forEach(venta => {
        divVEntas = document.createElement("div");
        divVEntas.innerHTML = `
        <h3> Producto vendido: ${venta.producto} </h3>
        <ul>
            <li> Turno de venta: ${venta.turno} </li>
            <li> Valor cuota: ${venta.cuota} </li>
        </ul>
        `
        contenedorVentas.append(divVEntas);
    });
    const botonVolver = document.createElement("button");
    botonVolver.innerText = "Volver";
    botonVolver.addEventListener("click", () => {
        inicio ();
    })
    contenedorVentas.prepend(botonVolver)
}

function inicio (){
    const contenedorVentas = document.getElementById("bodyDiv");
    contenedorVentas.innerHTML = "";
    crearBotonDetalle(); 
}

