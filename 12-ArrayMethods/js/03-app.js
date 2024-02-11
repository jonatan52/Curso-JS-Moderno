//Mtodo Reduce
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//con forEch
let total = 0;
carrito.forEach(prducto => total += prducto.precio);
console.log(total);

//con el metodo reduce
let resultado = carrito.reduce((total,producto) => total + producto.precio, 0)
console.log(resultado);