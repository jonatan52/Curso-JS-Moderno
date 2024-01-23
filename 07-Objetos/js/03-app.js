const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponibles: true,
}

console.log(producto);
console.log(producto.nombre);


//Agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";

//Eliminar propiedades del objeto
delete producto.disponibles