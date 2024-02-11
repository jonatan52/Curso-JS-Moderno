//findIndex
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Forma manual 
meses.forEach((mes,i)=>{
    if(mes === "Enero"){
        console.log(`Encontrado en el indice ${i}`)
    }
})

//con el metodo findIndex
const indice = meses.findIndex(mes => mes === `Abril`);
console.log(`indice ${indice}`)