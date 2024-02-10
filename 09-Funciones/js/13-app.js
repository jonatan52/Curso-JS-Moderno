const reproductor = {
    reproducir: id =>`Reproduciendo cancion ${id}`,

    pausar:() => console.log(`Pausando....`),

    borrar: id => console.log(`Borrando Cancion ${id}`),

    crearPlayList: nombre => console.log(`Creando playlist ${nombre}`),

    agregarCancion:nombre => console.log(`Agregando cancion ${nombre}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Anadiendo ${cancion}`);
    }

}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlayList("Salsa")
reproductor.agregarCancion("Parte de mi vida")