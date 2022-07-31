// clase 8 ejercicio 1


// Con el constructor no me salio

/*ciudadArray = ["a", "b", "c"];

class ciudad {
    constructor (nombre) {
        this.nombre = nombre;
    }
}



const cuidad1 = new ciudad ("bariloche");
const cuidad2 = new ciudad ("Monterrey");
const cuidad3 = new ciudad ("Carapa");



ciudadArray.push(cuidad1);
ciudadArray.push(cuidad2);
ciudadArray.push(cuidad3);
*/
//-------------------------------------

//Sin ver la resolucion de actividad me salio, me quedo largo

/*ciudadArray = ["a", "b", "c"];

let bodyChildren = document.getElementById("bodyId");

let mostrarCiudad = document.createElement("h2");
mostrarCiudad.innerText = ciudadArray

for (const c of ciudadArray) {
    bodyChildren.append (mostrarCiudad);
     
}*/

//------------------------------------

// Resolucion de actividad

ciudadArray = ["a", "b", "c"];

for ( const c of ciudadArray){
    let h2 = document.createElement('h2');
    h2.innerHTML = c;
    document.body.appendChild(h2);
}