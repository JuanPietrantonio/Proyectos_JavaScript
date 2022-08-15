//  Calculador de comisiones

class Venta {
    constructor (dias, ventas) {
        this.dias = dias;
        this.ventas = ventas;
    }
}

const ventas = [];
let nombre = "";

//boton de captura de datos
const botonCaptura = document.getElementById("botonCaptura");
botonCaptura.addEventListener("click", () => {capturarVentas ()}  )

//funcion inicial  trae los datos que hay en storage, si no hay datos, muestra mensaje para cargar datos

function pintarInfoInicial () {
    
    const divImpresion = document.getElementById("bodyDiv2");
    const impresionInfo = document.createElement("ul");
    const ventasJSON = localStorage.getItem('ventas');
    const ventasStorage = JSON.parse(ventasJSON) || [];
    const nombreStorage = localStorage.getItem('nombre') || null;
    divImpresion.innerHTML = ""

    nombreStorage == null ?
    impresionInfo.innerHTML = "<h3> No hay info previa cargada </h3>"
    : impresionInfo.innerHTML = `
    <h2> ${ nombreStorage } tus resultados son: </h2>
    <li> Dias trabajados: ${ventasStorage[0].dias} </li>
    <li> Ventas concretadas: ${ventasStorage[0].ventas} </li>
    ` 
    divImpresion.append(impresionInfo)
}

pintarInfoInicial ()

//sincronizo la info capturada en el storage
function sincronizarStorage () {
    localStorage.setItem('ventas', JSON.stringify(ventas) )
    localStorage.setItem('nombre', nombre)
}

function leerStorage () {
    const ventasJSON = localStorage.getItem('ventas');
    const ventasStorage = JSON.parse(ventasJSON);
    console.log(ventasStorage);
}

//capturo la info para plasmarla y a la vez guardarla en storage
function capturarVentas () {
    const diasTrabajados = document.getElementById("diasTrabajados").value;
    const ventasConcretadas = document.getElementById("ventasConcretadas").value;
    const nombreCapturado = document.getElementById("nombre").value;
    nombre = nombreCapturado;
    ventas.length = 0;
    let venta = new Venta (diasTrabajados, ventasConcretadas);
    ventas.push(venta);
    sincronizarStorage ();
    pintarInfo ();
    
}


//pinto la info al darle click en actualizar
function pintarInfo () {
    const divImpresion = document.getElementById("bodyDiv2");
    const impresionInfo = document.createElement("ul");
    const [venta] = ventas;
    const nombreStorage = localStorage.getItem('nombre');
    //const nombreStorage1 = JSON.parse(nombreStorage);  
    divImpresion.innerHTML = ""
    impresionInfo.innerHTML = `
    <h2> ${ nombre } tus resultados son: </h2>
    <li> Dias trabajados: ${venta.dias} </li>
    <li> Ventas concretadas: ${venta.ventas} </li>
    `
    divImpresion.append(impresionInfo);
}

