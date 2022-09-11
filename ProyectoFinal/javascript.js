

const datos = []
let diasVigencia = "";
const objetivo = [];

const botonCargarDatos = document.getElementById("cargar");
botonCargarDatos.addEventListener ("click", () => {cargarDatos ()}  )

const botonBorrarDatos = document.getElementById("BorrarTodo");
botonBorrarDatos.addEventListener ("click", () => {borrarDatos ()}  )

activarFetch();

function activarFetch () {
    fetch ('./ProyectoFinal/data.json')
        .then (res => res.json())
        .then (data => {
        diasVigenciaFetch(data);
        objetivoFetch(data);
    })
    fetch ('./ProyectoFinal/vendedor.json')
        .then (res => res.json())
        .then (vend => {
        listaVendedores(vend);
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

function listaVendedores(vend) {
    const listaId = document.getElementById('vendedor');
    for (vend of vend ) {
        const listaOpciones = document.createElement('option');
        listaOpciones.value = vend.ID;
        listaOpciones.text = vend.vendedor;
        listaId.append(listaOpciones);
    }
    
}

function pantallaInicial () {
    datosStorage = localStorage.getItem('datos') || null;
    datosStorage == null ? borrarDatos() : cargarDatosIniciales();
    function cargarDatosIniciales () {
        imprimirInfo ();
        imprimirObjetivo1();
        imprimirObjetivo2();
    }
}

pantallaInicial();

function borrarDatos () {
    const divContainterInfo = document.getElementById('container-2-info');
    const impresionInfo = document.createElement('li');
    divContainterInfo.innerHTML = "";
    impresionInfo.innerHTML = `
    <h3>Infomacion general</h3>
    <ul>Total de ventas: -</ul>
    <ul>Promedio de ventas: -</ul>
    <ul>Distribucion con Promo / sin Promo: -%/-%</ul>
    <ul>Escala actual o la mas cercana: -</ul>
    <ul>Comision actual o la mas cercana: -</ul>
    `
    divContainterInfo.append(impresionInfo);

    const divContainterObjetivo1 = document.getElementById('container-2-objetivo-detalle1');
    const impresionObjetivo1 = document.createElement('li');
    divContainterObjetivo1.innerHTML = "";
    impresionObjetivo1.innerHTML = `
    <h3>Siguiente escala: -</h3>
    <ul>Ventas para alcanzar proxima escala: -</ul>
    <ul>Ventas diarias para proxima escala: -</ul>
    <ul>Comision: -</ul>
    <br>
    <h3>20% extra para asegurar escala: -</h3>
    <ul>Ventas para asegurar proxima escala: -</ul>
    <ul>Ventas diarias para asegurar escala: -</ul>
    <ul>Comision: -</ul>
    `
    divContainterObjetivo1.append(impresionObjetivo1);

    const divContainterObjetivo2 = document.getElementById('container-2-objetivo-detalle2');
    const impresionObjetivo2 = document.createElement('li');
    divContainterObjetivo2.innerHTML = "";
    impresionObjetivo2.innerHTML = `
    <h3>Objetivo personal: -</h3>
    <ul>Ventas para objetivo: -</ul>
    <ul>Ventas diarias para objetivo: -</ul>
    <ul>Comision: -</ul>
    <br>
    <h3>20% extra para asegurar objetivo: -</h3>
    <ul>Ventas para asegurar objetivo: -</ul>
    <ul>Ventas diarias para asegurar objetivo: -</ul>
    <ul>Comision: -</ul>
    `
    divContainterObjetivo2.append(impresionObjetivo2);
    localStorage.clear();
}


function cargarDatos () {
    const nombre = document.getElementById("vendedor");
    const sinPromo = document.getElementById("sinPromo").value;
    const conPromo = document.getElementById("conPromo").value;
    const diasRestantes = parseInt(document.getElementById("diasRestantes").value);
    const objetivoPersonal = document.getElementById("objetivoPersonal").value;
    let ventasTotal = parseInt(sinPromo) + parseInt(conPromo);
    if (isNaN(sinPromo) ||  sinPromo <0 ||  isNaN(conPromo) || conPromo <0 || isNaN(diasRestantes) || diasRestantes <0 || isNaN(objetivoPersonal) || objetivoPersonal<ventasTotal) {
        swal({
            title: "Revisa los datos cargados",
            text: "",
            icon: "error",
          });
          pantallaInicial();
          return;
    }
    
    while(datos.length > 0){datos.pop()}
    datos.push(nombre.value, sinPromo, conPromo, diasRestantes, objetivoPersonal);  
    sincronizarStorage ();  
    imprimirNombre();
    imprimirInfo ();
    imprimirObjetivo1();
    imprimirObjetivo2();
    Toastify({
        text: "Datos actualizados",
        duration: 2000
    }).showToast();
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
    impresionNombre.innerHTML = `${datos[0]}`
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
    const impresionInfo = document.createElement('li');
    divContainterInfo.innerHTML = "";
    impresionInfo.innerHTML = `
    <h3> Infomacion general</h3>
    <ul>Total de ventas: ${ventasTotal}</ul>
    <ul>Promedio de ventas: ${promedio.toFixed(2)}</ul>
    <ul>Distribucion con Promo / sin Promo: ${sinPromo.toFixed()}%/${conPromo.toFixed()}%</ul>
    <ul>Escala actual o la mas cercana: ${escalaActual}</ul>
    <ul>Comision actual o la mas cercana: ${proxComision}</ul>
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
    const impresionObjetivo1 = document.createElement('li');
    divContainterObjetivo1.innerHTML = "";
    impresionObjetivo1.innerHTML = `
    <h3>Siguiente escala: ${proxEscala}</h3>
    <ul>Ventas para alcanzar proxima escala: ${ventasFaltantesProxEscala}</ul>
    <ul>Ventas diarias para proxima escala: ${ventasPorDiaProxEscala.toFixed(2)}</ul>
    <ul>Comision: ${proxComision}</ul>
    <br>
    <h3>20% extra para asegurar escala: ${parseInt((proxEscala*1.2))}</h3>
    <ul>Ventas para asegurar proxima escala: ${parseInt(((proxEscala*1.2)-ventasTotal))}</ul>
    <ul>Ventas diarias para asegurar escala: ${(((proxEscala*1.2)-ventasTotal)/datosStorage[3]).toFixed(2)}</ul>
    <ul>Comision: ${proxComision}</ul>
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
    const impresionObjetivo2 = document.createElement('li');
    divContainterObjetivo2.innerHTML = "";
    impresionObjetivo2.innerHTML = `
    <h3>Objetivo personal: ${datosStorage[4]}</h3>
    <ul>Ventas para objetivo: ${ventasFaltantesProxEscala}</ul>
    <ul>Ventas diarias para objetivo: ${ventasPorDiaProxEscala.toFixed(2)}</ul>
    <ul>Comision: ${objComision}</ul>
    <br>
    <h3>20% extra para asegurar objetivo: ${parseInt((datosStorage[4]*1.2))}</h3>
    <ul>Ventas para asegurar objetivo: ${parseInt(((datosStorage[4]*1.2)-ventasTotal))}</ul>
    <ul>Ventas diarias para asegurar objetivo: ${(((datosStorage[4]*1.2)-ventasTotal)/datosStorage[3]).toFixed(2)}</ul>
    <ul>Comision: ${objComision}</ul>
    `
    divContainterObjetivo2.append(impresionObjetivo2);
}
