const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponibles: true,
    informacion:{
        medidas:{
            peso:'1kg',
            medida:'1m'
        },
        fabricacion:{
            pais:'China'
        }
    }
}

const {nombre, informacion,informacion:{fabricacion:{pais}}}=producto;

console.log(nombre);
console.log(informacion);
console.log(pais);