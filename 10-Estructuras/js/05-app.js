// Switch case
const metodoPago = 'tarjeta';
switch(metodoPago){
    case 'efectivo':
        console.log(`Pagaste con efectivo`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con tarjeta`)
        break;
    default:
        console.log('Ingtresa un metod de pago')    

}