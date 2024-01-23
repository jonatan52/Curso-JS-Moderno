"use strict";
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponibles: true,
}

//direncia entre freeze y seal: freeze no te deja modificar 
//nada y seal si te deja modificar las llaves existente de un objeto pero no te deja agregar o eliminarlas
Object.seal(producto);

producto.disponibles = false;

console.log(producto)

console.log(Object.isSealed(producto));


