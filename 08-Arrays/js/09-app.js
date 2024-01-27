const carrito = [
    {nombre: "Monitor 27 pulgads", precio:500},
    {nombre: "Television", precio:100},
    {nombre: "Tablet", precio:200},
    {nombre: "Audifonos", precio:300},
    {nombre: "Teclado", precio:400},
    {nombre: "Celular", precio:700},
]

for(let producto = 0; producto<carrito.length; producto++){
    console.log(carrito[producto]);
}

carrito.forEach(function(producto){
    console.log(`${producto.nombre} - precio:${producto.precio}`)
})