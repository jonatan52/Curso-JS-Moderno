/*
  Una función en JavaScript es un bloque de código o un 
  conjunto de instrucciones que realiza una tarea 
  específica y que puede reutilizarse a voluntad. 
  Por lo tanto, una función es uno de los 
  building blocks(bloques de construcción) fundamentales de JavaScript.
*/

//Declaracion de Funcion(Functions Declaration)
sumar();
function sumar(){
    console.log(5 + 5);
};

//Nota: La diferencia entre estas dos formas de funcion 
//esque las Functions Declarations se puede acceder a ella antes de declararlar
//la Funtion Declarations no.
//Nota:esto pasa por el hoisting(Elevacion)
//Hosting, o elevación es el comportamiento
//por defecto de JavaScript de 
//“mover declaraciones al principio” 
//del código. Hosting es un término que se puede 
//encontrar a partir de ECMAScript® 2015 Language Specification.

sumar2();
//Expresion de Funcion(Functions Expresion)
const sumar2 = function(){
    console.log(2 + 2);
};
