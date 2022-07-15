// booket clase 2 ej 4

let presupuesto = parseInt(prompt('Ingrese su presupuesto, le indicaremos si es bajo, medio o alto: '));
let presupuestoBajo = 1000;
let presupuestoMedio = 1001;
let presupuestoAlto = 3000;

if (presupuesto <= presupuestoBajo) {
    alert ("Presupuesto bajo");
}

else if  (presupuesto > presupuestoBajo && presupuesto < presupuestoAlto) {
    alert ("Presupuesto medio");
}

else if  (presupuesto >= presupuestoAlto) {
    alert('Presupuesto alto');
}

else {
    alert('Error');
}