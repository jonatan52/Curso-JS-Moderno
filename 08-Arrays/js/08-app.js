//destructuring

const producto = {
    nombre:"Televisor 32 pulgadas",
    precio:500,
    disponible:true
}

const {nombre } =  producto;
console.log(nombre);


// Destructuring con arreglos
const numeros = [10,20,30,40];
const [,,tercero] = numeros;

const [,,...terceros] = numeros;
console.log(terceros)