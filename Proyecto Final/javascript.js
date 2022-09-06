

const datos = []


const botonCargarDatos = document.getElementById("cargar");
botonCargarDatos.addEventListener ("click", () => {cargarDatos ()}  )

const botonBorrarDatos = document.getElementById("BorrarTodo");
botonBorrarDatos.addEventListener ("click", () => {borrarDatos ()}  )


function cargarDatos () {
    const nombre = document.getElementById("nombre").value;
    const sinPromo = document.getElementById("sinPromo").value;
    const conPromo = document.getElementById("conPromo").value;
    const diasRestantes = document.getElementById("diasRestantes").value;
    const objetivoPersonal = document.getElementById("objetivoPersonal").value;
    while(datos.length > 0){datos.pop()}
    datos.push(nombre, sinPromo, conPromo, diasRestantes, objetivoPersonal);
    sincronizarStorage ();
    imprimirNombre();
    imprimirInfo ();
    console.log(datos);
}

function borrarDatos () {
    while(datos.length > 0){datos.pop()}
    sincronizarStorage ();
    console.log(datos);
}

function sincronizarStorage () {
    localStorage.setItem('datos', JSON.stringify(datos));
}

function imprimirNombre () {
    const divContainerNombre = document.getElementById('container-2-nombre');
    const impresionNombre = document.createElement('h2');
    divContainerNombre.innerHTML = "";
    const datosStorage = JSON.parse(localStorage.getItem('datos'));
    impresionNombre.innerHTML = `${datosStorage[0]}`
    divContainerNombre.append(impresionNombre);
}

function imprimirInfo () {
    const datosStorage = JSON.parse(localStorage.getItem('datos'));
    let promedio = parseInt(datosStorage[1]) + parseInt(datosStorage[2]);
    let sinPromo = (parseInt(datosStorage[1])/(parseInt(datosStorage[1]) + parseInt(datosStorage[2])))*100;
    let conPromo = (parseInt(datosStorage[2])/(parseInt(datosStorage[1]) + parseInt(datosStorage[2])))*100;
    const divContainterInfo = document.getElementById('container-2-info');
    const impresionInfo = document.createElement('ul');
    divContainterInfo.innerHTML = "";
    impresionInfo.innerHTML = `
    <li>Promedio de ventas: ${promedio}</li>
    <li>Distribucion: ${sinPromo}%/${conPromo}%</li>
    `
    divContainterInfo.append(impresionInfo);
    console.log(promedio);
}