"use strict";
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponibles: true,
}

Object.freeze(producto);

console.log(producto);

console.log(Object.isFrozen(producto));

