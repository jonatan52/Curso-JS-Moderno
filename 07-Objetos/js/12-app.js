//Object Literal
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponibles: true,
    mostraInfo:function(){
        console.log(`El producto: ${this.nombre} tiene un precio de:${this.precio}`)
    }
}

//Object Contructor
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

//Creacion de un nuevo producto
const producto2 = new Producto("Monitor de 23 pulgadas", 500)
console.log(producto2);
