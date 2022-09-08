

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
    imprimirObjetivo2();
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
    <h3>Infomacion general</h3>
    <li>Promedio de ventas: ${promedio}</li>
    <li>Distribucion con Promo / sin Promo: ${sinPromo}%/${conPromo}%</li>
    `
    divContainterInfo.append(impresionInfo);
    console.log(promedio);
}



/*function definirEscala () {
    //funcion logica para definir rango de escalas del vendedor
    const datosStorage = JSON.parse(localStorage.getItem('datos'));
    const objetivoStorage = JSON.parse(localStorage.getItem('objetivo'));
    ventasTotal = parseInt(datos[1]) + parseInt(datos[2])

    if (ventasTotal < objetivoStorage[0].escala) {proxEscala = parseInt(objetivoStorage[1].escala)}
    else if (ventasTotal >= objetivoStorage[0].escala && ventasTotal < objetivoStorage[1].escala ) {proxEscala = parseInt(objetivoStorage[1].escala)}
    else if (ventasTotal >= objetivoStorage[1].escala && ventasTotal < objetivoStorage[2].escala ) {proxEscala = parseInt(objetivoStorage[2].escala)}
    else if (ventasTotal >= objetivoStorage[2].escala && ventasTotal < objetivoStorage[3].escala ) {proxEscala = parseInt(objetivoStorage[3].escala)}
    else {proxEscala = parseInt(datos[4])}
    
}*/

function imprimirObjetivo1 () {
    const datosStorage = JSON.parse(localStorage.getItem('datos'));
    const objetivoStorage = JSON.parse(localStorage.getItem('objetivo'))
    ventasTotal = parseInt(datos[1]) + parseInt(datos[2])
    //probar como me funciona esto
    let proxEscala = (ventasTotal < objetivoStorage[0].escala) ? parseInt(objetivoStorage[0].escala) : (ventasTotal >= objetivoStorage[0].escala && ventasTotal < objetivoStorage[1].escala ) ? parseInt(objetivoStorage[1].escala) : (ventasTotal >= objetivoStorage[1].escala && ventasTotal < objetivoStorage[2].escala) ? parseInt(objetivoStorage[2].escala) : (ventasTotal >= objetivoStorage[2].escala && ventasTotal < objetivoStorage[3].escala) ? parseInt(objetivoStorage[3].escala) : parseInt(datos[4]);
    //probar como me funciona esto
    let proxComision = (ventasTotal < objetivoStorage[0].escala) ? parseInt(objetivoStorage[0].comision) : (ventasTotal >= objetivoStorage[0].escala && ventasTotal < objetivoStorage[1].escala ) ? parseInt(objetivoStorage[1].comision) : (ventasTotal >= objetivoStorage[1].escala && ventasTotal < objetivoStorage[2].escala) ? parseInt(objetivoStorage[2].comision) : (ventasTotal >= objetivoStorage[2].escala && ventasTotal < objetivoStorage[3].escala) ? parseInt(objetivoStorage[3].comision) : parseInt(datos[4]);

    //definirEscala ();
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
    <h3>20% extra para asegurar escala: ${(proxEscala*1.2)}</h3>
    <li>Ventas para asegurar proxima escala: ${((proxEscala*1.2)-ventasTotal)}</li>
    <li>Ventas diarias para asegurar escala: ${((proxEscala*1.2)-ventasTotal)/datosStorage[3]}</li>
    <li>Comision: ${proxComision}</li>
    `
    divContainterObjetivo1.append(impresionObjetivo1);
}

function imprimirObjetivo2 () {
    const datosStorage = JSON.parse(localStorage.getItem('datos'));
    const objetivoStorage = JSON.parse(localStorage.getItem('objetivo'))
    let ventasFaltantesProxEscala = parseInt(datos[4]) - (parseInt(datosStorage[1]) +  parseInt(datosStorage[2]));
    let ventasPorDiaProxEscala = parseFloat(ventasFaltantesProxEscala / datosStorage[3])
    let proxComision = (ventasTotal < objetivoStorage[0].escala) ? parseInt(objetivoStorage[0].comision) : (ventasTotal >= objetivoStorage[0].escala && ventasTotal < objetivoStorage[1].escala ) ? parseInt(objetivoStorage[1].comision) : (ventasTotal >= objetivoStorage[1].escala && ventasTotal < objetivoStorage[2].escala) ? parseInt(objetivoStorage[2].comision) : (ventasTotal >= objetivoStorage[2].escala && ventasTotal < objetivoStorage[3].escala) ? parseInt(objetivoStorage[3].comision) : parseInt(datos[4]);

    const divContainterObjetivo2 = document.getElementById('container-2-objetivo-detalle2');
    const impresionObjetivo2 = document.createElement('ul');
    divContainterObjetivo2.innerHTML = "";
    impresionObjetivo2.innerHTML = `
    <h3>Objetivo personal</h3>
    <li>Ventas para proxima escala: ${ventasFaltantesProxEscala}</li>
    <li>Ventas diarias para proxima escala: ${ventasPorDiaProxEscala}</li>
    <li>Comision: ${proxComision}</li>
    `
    divContainterObjetivo2.append(impresionObjetivo2);
}


//HACER PRUEBAS DE LOGICA CUANDO VENDO MAS DE 34 VENTAS Y LO MISMO CON OBJETIVO PERSONAL, FUNCION FLECHA PARA CALCULAR LA COMISION 

//VER SI SE PUEDE AGREGAR UN "VALOR VENTA" IGUAL QUE LOS IF ELSE DE LAS ESCALAS, AGREGAR AL DATA.JSON EL VALOR POR VENTA SEGUN CADA ESCALA Y LISTO YA TENEMOS LO NECESARIO PARA CALCULAR LA PLATA EXACTA QUE SE PUEDEN LLEVAR CON SU ESCALA MAS LAS VENTAS INDIVIDUALES

//terminar objetivo personal con 20% extra