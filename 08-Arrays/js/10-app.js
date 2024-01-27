const carrito = [
    {nombre: "Monitor 27 pulgads", precio:500},
    {nombre: "Television", precio:100},
    {nombre: "Tablet", precio:200},
    {nombre: "Audifonos", precio:300},
    {nombre: "Teclado", precio:400},
    {nombre: "Celular", precio:700},
]


//.map crea un nuevo arreglo y forEach no
const nuevoareglo = carrito.map(function(producto){
    return(`${producto.nombre} - precio:${producto.precio}`);
});
console.log(nuevoareglo)


const nuevoareglo2 = carrito.forEach(function(producto){
    console.log(`${producto.nombre} - precio:${producto.precio}`)
});
console.log(nuevoareglo2)