//Añadir Funciones a un metodo

const reproductor = {
    reproducir:function(id){
        console.log(`Reproduciendo cancion ${id}`);
    },

    pausar:function(){
        console.log(`Pausando....`)
    },

    borrar:function(id){
        console.log(`Borrando cancion ${id}`)
    },

    crearPlayList:function(nombre){
        console.log(`Creando playlist ${nombre}`)
    },

    agregarCancion:function(id){
        console.log(`Agrqagando cancion ${id}`)
    }


}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlayList("Salsa")
reproductor.agregarCancion(20)