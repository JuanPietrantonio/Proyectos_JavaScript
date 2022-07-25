//Variables editables para empleador
let turnosTrabajables = 5;
let potenciador = 5;
let potencia = 1.2;
let valorVenta = 1200;
let valorTurno = 600;

//Variables no editables
let ventasTotal = 0;
let potenciaPorc = (potencia*100) - 100;
let comisionAdvance = 0;
let pagoTurnos = 0;
let pagoFinal = 0;

//Array
const ventasTotalArray = [];


class venta {
    constructor (turno, producto, cuota) {
        this.turno =  turno;
        this.producto = producto;
        this.cuota = cuota;
    }
}

function pagoTurnos1 (turnosTrabajados, valorTurno){
    pagoTurnos = turnosTrabajados * valorTurno
}

function comisionAdvance1 (ventasTotal, valorVenta) {
    comisionAdvance = ventasTotal * valorVenta;
    if (ventasTotal > potenciador){
        comisionAdvance = comisionAdvance * potencia
    }
}

function pagoFinal1 (pagoTurnos, comisionAdvance){
    pagoFinal = pagoTurnos + comisionAdvance
}

function nuevaVenta(){
    let ventaTurno = parseInt(prompt(`Ingresa el turno en que realizaste tu venta n° ${i}:` ));
    while (isNaN(ventaTurno) || ventaTurno < 1 || ventaTurno > turnosTrabajados) {
        ventaTurno = prompt(`Ingresa un numero valido (Recorda que trabajaste ${turnosTrabajados} turnos )`)
    }

    let ventaProducto = parseInt(prompt ("Ingresa el producto vendido siendo \n 1 - GP Advance \n 2 - GP Classic"));
    while (isNaN(ventaProducto) || ventaProducto < 1 || ventaProducto > 2) {
        ventaProducto = parseInt(prompt("Ingresa un numero valido (1 - GP Advance o 2 - GP Classic): "))
    }
    if (ventaProducto == "1") {
        ventaProducto = "GP Advance"
    }
    else {
        ventaProducto = "GP Classic"
    }

    let VentaCuota = parseInt(prompt("Ingresa el valor de la cuota siendo: \n 1 - Cuota pura \n 2 - 50% descuento \n 3 - Primer mes bonificado"));
    while (isNaN(VentaCuota) || VentaCuota < 1 || VentaCuota > 3) {
        VentaCuota = parseInt(prompt("Ingresa un numero valido (1 - Cuota pura 2 - 50% descuento o 3 - Primer mes bonificado): "))
    }
    if (VentaCuota == "1") {
        VentaCuota = "Cuota pura"
    }
    else if (VentaCuota == "2"){
        VentaCuota = "50% descuento"
    }
    else {
        VentaCuota = "Primer mes bonificado"
    }

    ventaGp = new venta(ventaTurno, ventaProducto, VentaCuota);
    ventasTotalArray.push(ventaGp);
}

const primera = [];
function primeraVenta (turno){
    const primera1 = ventasTotalArray.find( p => p.turno == turno )
    primera.push ({turno: primera1.turno});
}



let nombreOperador = prompt("Bienvenido/a al calculador de comisiones, te recuerdo las condiciones de contrato para evitar confusiones: 1- Podes trabajar hasta " + turnosTrabajables + " turnos por semana, si trabajaste mas turnos, solo computaremos los primeros " + turnosTrabajables + " para tu paga. 2- Cada dia de trabajo vale " + valorTurno + " pesos, vendas o no  3- Todas las ventas que hagas seran pagadas, en tanto se realicen dentro de los " + turnosTrabajables + " turnos permitidos por semana. 4- Los productos comercializados son 'GP advance' y 'GP Classic', cada venta suma " + valorVenta + " pesos a tu comision. 5- Si superas las " + potenciador + " ventas totales en los turnos trabajados esta semana, tu comision final aumenta un " + potenciaPorc + "% . Ingresa tu nombre para continuar: ")

//Pido al operador que ingrese la cantidad de turnos trabajados
let turnosTrabajados = parseFloat(prompt("Hola " + nombreOperador + ", espero que hayas tenido una gran semana de ventas, cuantos turnos trabajaste? Recorda que se computan maximo " + turnosTrabajables + ", pueden ser turnos fraccionados"))

//Si ingresa un valor no numerico no le dejamos avanzar
while (isNaN(turnosTrabajados) || turnosTrabajados < 1) {
    turnosTrabajados = parseFloat(prompt("Ingresa solo numeros enteros positivos o decimales!, cuantos turnos trabajaste?: "))
}

//Son maximos 5 turnos que se computan
if (turnosTrabajados >turnosTrabajables){
    turnosTrabajados = turnosTrabajables
}

//Pido al vendedor que ingrese cuantas ventas hizo en total
ventasTotal = parseInt(prompt(`Ingresa la cantidad total de ventas concretadas en tus ${turnosTrabajados} turnos:`))
while (isNaN(ventasTotal) || ventasTotal < 1) {
    ventasTotal = parseInt(prompt(`Ingresa solo numeros enteros positivos o decimales! Ingresa la cantidad total de ventas concretadas en tus ${turnosTrabajados} turnos:`))
}


for (i = 1; i <= ventasTotal; i++) {
    nuevaVenta();
}

// Se formula el mensaje del detalle de ventas por si se requiere
let mensaje= "";
for (const venta of ventasTotalArray){
    detalleVenta(venta);}
function detalleVenta (objeto){
    mensaje += (`\n Turno: ${objeto.turno}, Producto: ${objeto.producto},  Cuota: ${objeto.cuota}`);
}


//Menu interactivo para editar variables
salir = "";
while (salir != "3"){
    opcionDetalle = parseInt(prompt("Para continuar ingrese una opcion: \n 1 - Ver detalle de ventas cargadas \n 2 - Ver pago final \n 3 - Salir "));
    while (isNaN(opcionDetalle) || opcionDetalle <= 0 || opcionDetalle > 3) {
        opcionDetalle = parseInt(prompt("Ingresa un numero valido (1 para ver detalle por turno, 2 para ver pago final o 3 para salir): "))
    }

    if (opcionDetalle == "1") {
        let mensaje1 = (`Tus ventas cargados son ${ventasTotalArray.length}: ${mensaje}`);
        alert(mensaje1);
    }

    else if (opcionDetalle == "2") {
        pagoTurnos1 (turnosTrabajados, valorTurno);
        comisionAdvance1 (ventasTotal, valorVenta);
        pagoFinal1 (pagoTurnos, comisionAdvance);
        alert ("Tus paga final se abonara de la siguiente forma.\n1- Pago por turnos trabajados => " + valorTurno + " * " + turnosTrabajados + " : " + pagoTurnos + " pesos. \n" + "2- Pago por ventas realizadas (si lograste mas de 10 ventas, el potenciador de comision se aplicara automaticamente al resultado) => " + valorVenta + " * "  + ventasTotal + " : " + comisionAdvance + " pesos. \n" + "Paga final => " + pagoFinal + " pesos.");
    }

    else  {
        alert("Gracias por utilizar el calculador de comisiones!");
        break;
    }
}