
let number1 = parseInt(prompt('Ingresa un valor, a dicho valor se le va a sumar el numero 5 una cantidad total de 10 veces, si el resultado es mayor a 80 se cortara el ciclo'))

for (let i = 0; i <= 10; i++) {
    console.log('El resultado es: ' + number1);
    number1 = number1 + 5;

    if (number1 > 80){
        console.log('El siguiente resultado es igual o mayor a 80, el ciclo termina aca')
        break;
    }
}
