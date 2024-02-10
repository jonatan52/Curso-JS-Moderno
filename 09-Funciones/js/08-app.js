//Funcione que pasan valores



let total = 0;
function agregarCarrito(precio){
    return total += precio;

}

function calcularImpuesto(total){
   
    return total*0.19;

}

total = agregarCarrito(200);
total = agregarCarrito(200);
total = agregarCarrito(200);
total = agregarCarrito(400);

let iva = calcularImpuesto(total)
let totalCompra = total + calcularImpuesto(total);

console.log(`Subtotal: ${total}`)
console.log(`Iva 19%: ${iva}`)
console.log(`Total: ${totalCompra}`)
