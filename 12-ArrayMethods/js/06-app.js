// Metodo concat

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const meses2 = ['Septiembre','Noviembre'];

const resultado = meses.concat(meses2);
console.log(resultado);

//spread operator
const resultado2 = [...meses, ...meses2];
console.log(resultado2);