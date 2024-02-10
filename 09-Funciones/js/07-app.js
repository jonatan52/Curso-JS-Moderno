//Como se comunican las funciones entre si

iniciarApp()
function iniciarApp(){
    console.log("Iniciando App...")

    SegundaFuncion()

}

function SegundaFuncion(){
    console.log("Iniciando desde la segunda funcion")

    usuarioAutenticado("jonatan")
}

function usuarioAutenticado(usuario){
    console.log(`Autenticando Usuario...espere`);
    console.log(`Hola ${usuario} haz ingresado exitosamente`)
}

