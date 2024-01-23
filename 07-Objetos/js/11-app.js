const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponibles: true,
    mostraInfo:function(){
        console.log(`El producto: ${this.nombre} tiene un precio de:${this.precio}`)
    }
}

producto.mostraInfo();