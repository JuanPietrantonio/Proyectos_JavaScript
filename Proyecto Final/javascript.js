

const datos = []
let diasVigencia = "";
const objetivo = [];

const botonCargarDatos = document.getElementById("cargar");
botonCargarDatos.addEventListener ("click", () => {cargarDatos ()}  )

const botonBorrarDatos = document.getElementById("BorrarTodo");
botonBorrarDatos.addEventListener ("click", () => {borrarDatos ()}  )

activarFetch();

function activarFetch () {
    fetch ('./data.json')
        .then (res => res.json())
        .then (data => {
        diasVigenciaFetch(data);
        objetivoFetch(data);
    })
}

function diasVigenciaFetch (data) {
    diasVigencia = data[0].diasVigencia;
}

function objetivoFetch (data) {
    for (let escala = 1; escala < data.length; escala++) {
        objetivo.push(data[escala]);
    }
}


function cargarDatos () {
    const nombre = document.getElementById("nombre").value;
    const sinPromo = document.getElementById("sinPromo").value;
    const conPromo = document.getElementById("conPromo").value;
    const diasRestantes = parseInt(document.getElementById("diasRestantes").value);
    const objetivoPersonal = document.getElementById("objetivoPersonal").value;
    while(datos.length > 0){datos.pop()}
    datos.push(nombre, sinPromo, conPromo, diasRestantes, objetivoPersonal);  
    sincronizarStorage ();  
    imprimirNombre();
    imprimirInfo ();
    imprimirObjetivo1();
}

function borrarDatos () {
    while(datos.length > 0){datos.pop()}
    sincronizarStorage ();
    imprimirNombre();
    imprimirInfo ();
}

function sincronizarStorage () {
    localStorage.setItem('datos', JSON.stringify(datos));
    localStorage.setItem('diasVigencia', diasVigencia);
    localStorage.setItem('objetivo', JSON.stringify(objetivo))
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
    const diasVigencia = localStorage.getItem('diasVigencia')
    let promedio = (parseInt(datosStorage[1]) + parseInt(datosStorage[2])) / (parseInt(diasVigencia)-parseInt(datosStorage[3]));
    let sinPromo = (parseInt(datosStorage[1])/(parseInt(datosStorage[1]) + parseInt(datosStorage[2])))*100;
    let conPromo = (parseInt(datosStorage[2])/(parseInt(datosStorage[1]) + parseInt(datosStorage[2])))*100;
    const divContainterInfo = document.getElementById('container-2-info');
    const impresionInfo = document.createElement('ul');
    divContainterInfo.innerHTML = "";
    impresionInfo.innerHTML = `
    <li>Promedio de ventas: ${promedio}</li>
    <li>Distribucion con Promo / sin Promo: ${sinPromo}%/${conPromo}%</li>
    `
    divContainterInfo.append(impresionInfo);
    console.log(promedio);
}

function imprimirObjetivo1 () {
    const datosStorage = JSON.parse(localStorage.getItem('datos'));
    const objetivoStorage = JSON.parse(localStorage.getItem('objetivo'))
    let ventasFaltantesProxEscala = parseInt(objetivoStorage[0].escala) - (parseInt(datosStorage[1]) +  parseInt(datosStorage[2]));
    console.log(ventasFaltantesProxEscala);
    /*let ventasPorDiaProxEscala = 
    let posibleComision = */
}