//Unir objetos

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponibles: true,
}

const medidas =  {
    peso:'1kg',
    medida:'1m'
}

console.log(producto);
console.log(medidas)

//Forma 1: de unir objetos
const resultado = Object.assign(producto, medidas);
console.log(resultado);

//Forma 2: de unir objetos
const resultado2 = {...producto, ...medidas};
console.log(resultado2);of

