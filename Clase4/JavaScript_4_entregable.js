
//Calculador de comisiones de un vendedor

//Este es un simulador de ventas interactivo, tanto para el empleador com el empleado. Como empleador podes modificar las condiciones de contrato como se puede ver abajo, como empleado se pueden cargar los datos de ventas y turnos trabajados.

//Defino mis variables y funciones para usar mas adelante

//Variables editables para empleador
let turnosTrabajables = 5;
let potenciador = 10;
let potencia = 1.2;
let valorVenta = 1000;
let valorTurno = 500;

//Variables no editables
let ventasTotal = 0;
let potenciaPorc = (potencia*100) - 100;
let comisionAdvance = 0;
let pagoTurnos = 0;
let pagoFinal = 0;

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

let nombreOperador = prompt("Bienvenido/a al calculador de comisiones, te recuerdo las condiciones de contrato para evitar confusiones: 1- Podes trabajar hasta " + turnosTrabajables + " turnos por semana, si trabajaste mas turnos, solo computaremos los primeros " + turnosTrabajables + " para tu paga. 2- Cada dia de trabajo vale " + valorTurno + " pesos, vendas o no  3- Todas las ventas que hagas seran pagadas, en tanto se realicen dentro de los " + turnosTrabajables + " turnos permitidos por semana. 4- El producto comercializado es 'GP advance', cada venta suma " + valorVenta + " pesos a tu comision. 5- Si superas las " + potenciador + " ventas totales en los turnos trabajados esta semana, tu comision final aumenta un " + potenciaPorc + "% . Ingresa tu nombre para continuar: ")


//Pido al operador que ingrese la cantidad de turnos trabajados
let turnosTrabajados = parseFloat(prompt("Hola " + nombreOperador + ", espero que hayas tenido una gran semana de ventas, cuantos turnos trabajaste? Recorda que se computan maximo " + turnosTrabajables + ", pueden ser turnos fraccionados"))

//Si ingresa un valor no numerico no le dejamos avanzar
while (isNaN(turnosTrabajados) || turnosTrabajados < 0) {
    turnosTrabajados = parseFloat(prompt("Ingresa solo numeros enteros positivos o decimales!: "))
}

//Son maximos 5 turnos que se computan
if (turnosTrabajados >turnosTrabajables){
    turnosTrabajados = turnosTrabajables
}



//Pido al vendedor que ingrese cuantas ventas hizo en sus turnos
for (let i = 1; i <= turnosTrabajados; i++) {
    let ventasTurno = parseInt(prompt("Ingrese la ventas realizadas en el turno n°: " + i ))
    while (isNaN(ventasTurno) || ventasTurno < 0 ) {
        ventasTurno = parseInt(prompt("Ingresa un numero valido!: "))
    }
    ventasTotal = ventasTotal + ventasTurno
}

//Le brindo informacion de sus turnos y ventas realizadas
alert("Bien " + nombreOperador + ", en tus " + turnosTrabajados + " turnos trabajados lograste un total de " + ventasTotal + " ventas... estamos calculando tu paga final, por favor clickea en 'ACEPTAR'")

//Ejecuto las funciones
pagoTurnos1(turnosTrabajados, valorTurno)
comisionAdvance1 (ventasTotal, valorVenta)
pagoFinal1 (pagoTurnos, comisionAdvance)


//Devuelvo al operador su paga final
alert ("Tus paga final se abonara de la siguinte forma. 1- Pago por turnos trabajados => " + valorTurno + " * " + turnosTrabajados + " : " + pagoTurnos + " pesos. " + "2- Pago por ventas realizadas (si lograste mas de 10 ventas, el potenciador de comision se aplicara automaticamente al resultado) => " + valorVenta + " * "  + ventasTotal + " : " + comisionAdvance + " pesos. " + "Paga final => " + pagoFinal + " pesos.")

