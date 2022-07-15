
let number1 = parseInt(prompt('Ingresa un valor numerico, a dicho valor se le va a sumar el numero 5 hasta alcanzar el numero 80, si el resultado es mayor a 80 se indica el resultado final y finalizara el ciclo'))

do {
    console.log('Numero base: ' + number1 + "  --->  " + '+5 ' + '= ' + (number1 + 5));
    number1 = number1 + 5;
    if (number1 >80){
        console.log('Se sumo exitosamente hasta alcanzar el numero: ' + (number1));
    }
}
while (number1 <=80)