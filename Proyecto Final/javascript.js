

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

function pantallaInicial () {
    datosStorage = localStorage.getItem('datos') || null;
    datosStorage == null ? borrarDatos() : cargarDatosIniciales();
    function cargarDatosIniciales () {
        /*const datosStorage = JSON.parse(localStorage.getItem('datos'));
        const diasVigencia = localStorage.getItem('diasVigencia');
        const objetivoStorage = JSON.parse(localStorage.getItem('objetivo'));*/
        imprimirNombre();
        imprimirInfo ();
        imprimirObjetivo1();
        imprimirObjetivo2();
    }
}

pantallaInicial();

function borrarDatos () {
    const divContainterInfo = document.getElementById('container-2-info');
    const impresionInfo = document.createElement('ul');
    divContainterInfo.innerHTML = "";
    impresionInfo.innerHTML = `
    <h3>Infomacion general</h3>
    <li>Total de ventas: -</li>
    <li>Promedio de ventas: -</li>
    <li>Distribucion con Promo / sin Promo: -%/-%</li>
    <li>Escala actual o la mas cercana: -</li>
    <li>Comision actual o la mas cercana: -</li>
    `
    divContainterInfo.append(impresionInfo);

    const divContainterObjetivo1 = document.getElementById('container-2-objetivo-detalle1');
    const impresionObjetivo1 = document.createElement('ul');
    divContainterObjetivo1.innerHTML = "";
    impresionObjetivo1.innerHTML = `
    <h3>Siguiente escala: -</h3>
    <li>Ventas para alcanzar proxima escala: -</li>
    <li>Ventas diarias para proxima escala: -</li>
    <li>Comision: -</li>
    <br>
    <h3>20% extra para asegurar escala: -</h3>
    <li>Ventas para asegurar proxima escala: -</li>
    <li>Ventas diarias para asegurar escala: -</li>
    <li>Comision: -</li>
    `
    divContainterObjetivo1.append(impresionObjetivo1);

    const divContainterObjetivo2 = document.getElementById('container-2-objetivo-detalle2');
    const impresionObjetivo2 = document.createElement('ul');
    divContainterObjetivo2.innerHTML = "";
    impresionObjetivo2.innerHTML = `
    <h3>Objetivo personal: -</h3>
    <li>Ventas para objetivo: -</li>
    <li>Ventas diarias para objetivo: -</li>
    <li>Comision: -</li>
    <br>
    <h3>20% extra para asegurar objetivo: -</h3>
    <li>Ventas para asegurar objetivo: -</li>
    <li>Ventas diarias para asegurar objetivo: -</li>
    <li>Comision: -</li>
    `
    divContainterObjetivo2.append(impresionObjetivo2);
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
    imprimirObjetivo2();
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
    const diasVigencia = localStorage.getItem('diasVigencia');
    const objetivoStorage = JSON.parse(localStorage.getItem('objetivo'));
    ventasTotal = parseInt(datosStorage[1]) + parseInt(datosStorage[2]);
    let promedio = (parseInt(datosStorage[1]) + parseInt(datosStorage[2])) / (parseInt(diasVigencia)-parseInt(datosStorage[3]));
    let sinPromo = (parseInt(datosStorage[1])/(parseInt(datosStorage[1]) + parseInt(datosStorage[2])))*100;
    let conPromo = (parseInt(datosStorage[2])/(parseInt(datosStorage[1]) + parseInt(datosStorage[2])))*100;
    let escalaActual = (ventasTotal < objetivoStorage[0].escala) ? parseInt(objetivoStorage[0].escala) : (ventasTotal >= objetivoStorage[0].escala && ventasTotal < objetivoStorage[1].escala ) ? parseInt(objetivoStorage[0].escala) : (ventasTotal >= objetivoStorage[1].escala && ventasTotal < objetivoStorage[2].escala) ? parseInt(objetivoStorage[1].escala) : (ventasTotal >= objetivoStorage[2].escala && ventasTotal < objetivoStorage[3].escala) ? parseInt(objetivoStorage[2].escala) : ventasTotal;
    let proxComision = (ventasTotal < objetivoStorage[0].escala) ? parseInt(objetivoStorage[0].comision) : (ventasTotal >= objetivoStorage[0].escala && ventasTotal < objetivoStorage[1].escala ) ? parseInt(objetivoStorage[0].comision) : (ventasTotal >= objetivoStorage[1].escala && ventasTotal < objetivoStorage[2].escala) ? parseInt(objetivoStorage[1].comision) : (ventasTotal >= objetivoStorage[2].escala && ventasTotal < objetivoStorage[3].escala) ? parseInt(objetivoStorage[2].comision) :  parseInt(objetivoStorage[3].comision);
    const divContainterInfo = document.getElementById('container-2-info');
    const impresionInfo = document.createElement('ul');
    divContainterInfo.innerHTML = "";
    impresionInfo.innerHTML = `
    <h3>Infomacion general</h3>
    <li>Total de ventas: ${ventasTotal}</li>
    <li>Promedio de ventas: ${promedio}</li>
    <li>Distribucion con Promo / sin Promo: ${sinPromo}%/${conPromo}%</li>
    <li>Escala actual o la mas cercana: ${escalaActual}</li>
    <li>Comision actual o la mas cercana: ${proxComision}</li>
    `
    divContainterInfo.append(impresionInfo);
}


function imprimirObjetivo1 () {
    const datosStorage = JSON.parse(localStorage.getItem('datos'));
    const objetivoStorage = JSON.parse(localStorage.getItem('objetivo'));
    ventasTotal = parseInt(datosStorage[1]) + parseInt(datosStorage[2]);

    let proxEscala = (ventasTotal < objetivoStorage[0].escala) ? parseInt(objetivoStorage[0].escala) : (ventasTotal >= objetivoStorage[0].escala && ventasTotal < objetivoStorage[1].escala ) ? parseInt(objetivoStorage[1].escala) : (ventasTotal >= objetivoStorage[1].escala && ventasTotal < objetivoStorage[2].escala) ? parseInt(objetivoStorage[2].escala) : (ventasTotal >= objetivoStorage[2].escala && ventasTotal < objetivoStorage[3].escala) ? parseInt(objetivoStorage[3].escala) : parseInt(datosStorage[4]);

    let proxComision = (ventasTotal < objetivoStorage[0].escala) ? parseInt(objetivoStorage[0].comision) : (ventasTotal >= objetivoStorage[0].escala && ventasTotal < objetivoStorage[1].escala ) ? parseInt(objetivoStorage[1].comision) : (ventasTotal >= objetivoStorage[1].escala && ventasTotal < objetivoStorage[2].escala) ? parseInt(objetivoStorage[2].comision) : (ventasTotal >= objetivoStorage[2].escala && ventasTotal < objetivoStorage[3].escala) ? parseInt(objetivoStorage[3].comision) :  parseInt(objetivoStorage[3].comision + (datosStorage[4] - objetivoStorage[3].escala)*400)

    let ventasFaltantesProxEscala = proxEscala - (parseInt(datosStorage[1]) +  parseInt(datosStorage[2]));
    let ventasPorDiaProxEscala = parseFloat(ventasFaltantesProxEscala / parseInt(datosStorage[3]))
    
    const divContainterObjetivo1 = document.getElementById('container-2-objetivo-detalle1');
    const impresionObjetivo1 = document.createElement('ul');
    divContainterObjetivo1.innerHTML = "";
    impresionObjetivo1.innerHTML = `
    <h3>Siguiente escala: ${proxEscala}</h3>
    <li>Ventas para alcanzar proxima escala: ${ventasFaltantesProxEscala}</li>
    <li>Ventas diarias para proxima escala: ${ventasPorDiaProxEscala}</li>
    <li>Comision: ${proxComision}</li>
    <br>
    <h3>20% extra para asegurar escala: ${parseInt((proxEscala*1.2))}</h3>
    <li>Ventas para asegurar proxima escala: ${parseInt(((proxEscala*1.2)-ventasTotal))}</li>
    <li>Ventas diarias para asegurar escala: ${((proxEscala*1.2)-ventasTotal)/datosStorage[3]}</li>
    <li>Comision: ${proxComision}</li>
    `
    divContainterObjetivo1.append(impresionObjetivo1);
}

function imprimirObjetivo2 () {
    const datosStorage = JSON.parse(localStorage.getItem('datos'));
    const objetivoStorage = JSON.parse(localStorage.getItem('objetivo'));
    ventasTotal = parseInt(datosStorage[1]) + parseInt(datosStorage[2]);
    let proxEscala = (ventasTotal < objetivoStorage[0].escala) ? parseInt(objetivoStorage[0].escala) : (ventasTotal >= objetivoStorage[0].escala && ventasTotal < objetivoStorage[1].escala ) ? parseInt(objetivoStorage[1].escala) : (ventasTotal >= objetivoStorage[1].escala && ventasTotal < objetivoStorage[2].escala) ? parseInt(objetivoStorage[2].escala) : (ventasTotal >= objetivoStorage[2].escala && ventasTotal < objetivoStorage[3].escala) ? parseInt(objetivoStorage[3].escala) : parseInt(datosStorage[4]);
    let ventasFaltantesProxEscala = parseInt(datosStorage[4]) - ventasTotal;
    let ventasPorDiaProxEscala = parseFloat(ventasFaltantesProxEscala / datosStorage[3])
    let objComision = (datosStorage[4] < objetivoStorage[0].escala) ? parseInt(objetivoStorage[0].comision) : (datosStorage[4] >= objetivoStorage[0].escala && datosStorage[4] < objetivoStorage[1].escala ) ? parseInt(objetivoStorage[0].comision) : (datosStorage[4] >= objetivoStorage[1].escala && datosStorage[4] < objetivoStorage[2].escala) ? parseInt(objetivoStorage[1].comision) : (datosStorage[4] >= objetivoStorage[2].escala && datosStorage[4] < objetivoStorage[3].escala) ? parseInt(objetivoStorage[2].comision) : parseInt(objetivoStorage[3].comision + (datosStorage[4] - objetivoStorage[3].escala)*400)

    const divContainterObjetivo2 = document.getElementById('container-2-objetivo-detalle2');
    const impresionObjetivo2 = document.createElement('ul');
    divContainterObjetivo2.innerHTML = "";
    impresionObjetivo2.innerHTML = `
    <h3>Objetivo personal: ${datosStorage[4]}</h3>
    <li>Ventas para objetivo: ${ventasFaltantesProxEscala}</li>
    <li>Ventas diarias para objetivo: ${ventasPorDiaProxEscala}</li>
    <li>Comision: ${objComision}</li>
    <br>
    <h3>20% extra para asegurar objetivo: ${parseInt((datosStorage[4]*1.2))}</h3>
    <li>Ventas para asegurar objetivo: ${parseInt(((datosStorage[4]*1.2)-ventasTotal))}</li>
    <li>Ventas diarias para asegurar objetivo: ${((datosStorage[4]*1.2)-ventasTotal)/datosStorage[3]}</li>
    <li>Comision: ${objComision}</li>
    `
    divContainterObjetivo2.append(impresionObjetivo2);
}


/////limitar decimales en distribucion de % y en Ventas diarias para asegurar escala con 20% en objetivo1

// agregar un toastify para cuando le damos a cargar datos

// un sweet alert para cuando le damos a borrar todo

// ver logica para que no puedan poner mas que numeros en los imput, si ponen otra cosa, un sweet alert para que revisen los datos requeridos

