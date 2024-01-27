const carrito =[];

const producto1 = {
    nombre:"Televisor 32 pulgadas",
    precio:500
}

const producto2 = {
    nombre:"Celular",
    precio:800
}

carrito.unshift(producto1, producto2);

console.table(carrito);

// //eliminar ultimo elemento de un arreglo
// carrito.pop();
// console.table(carrito)


// //eliminar al inicio elemento de un arreglo
// carrito.shift();
// console.table(carrito)

carrito.splice(1,1);
console.table(carrito)