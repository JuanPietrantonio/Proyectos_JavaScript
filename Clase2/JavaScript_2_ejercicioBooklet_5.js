//booklet clase 2 ej 5

let producto1 = prompt('Ingrese el primer producto: ');
let producto2 = prompt('Ingrese el segundo producto: ');
let producto3 = prompt('Ingrese el tercer producto: ');
let producto4 = prompt('Ingrese el cuarto producto: ');

if (producto1 != "" && producto2 != "" && producto3 != "" && producto4 != "") {
    let productos = (`Los productos cargados son: ${producto1}, ${producto2}, ${producto3}, ${producto4}`);
    alert(productos);
}

else {
    alert('Error: Es necesario cargar todos los productos');
}