const carrito =[];

const elemento1 = {
    nombre:"Televisor 32 pulgadas",
    precio:500
}

const elemento2 = {
    nombre:"Celular",
    precio:800
}

//Agregar un elemento al principio del arreglo
carrito.unshift(elemento2);

//Agregar un elemento al final del arreglo
carrito.push(elemento1);

console.table(carrito);