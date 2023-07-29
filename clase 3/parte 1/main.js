/* FUNCIONES */

/*

para declarar: 

function nombreFunction(){
    codigo a ejecutar
}

para invocar:

nombreFunction();
*/

// function saludar (){
//     console.log("hola");
// }

// saludar();

/* 

para declarar: 

function nombreFunction(param1, param2, param3){
    codigo a ejecutar
}

para invocar:

nombreFunction(valor1, valor2, valor3)
*/

// function saludar(saludo, nombre){
//     console.log(`${saludo}, ${nombre}`);
// }

// saludar("hola", "andres");
// saludar("bienvenido", "lucas");

/* 

return termina la funcion

*/

// function sumar(num1, num2){
//     return(num1 + num2);
// }

// let resultado = sumar(3, 2);
// console.log(resultado);

// function calculadora(num1, num2, operacion){
//     switch(operacion){
//         case "+":
//             return num1 + num2;
//             break;
//         case "-":
//             return num1 - num2;
//             break;
//         case "*":
//             return num1 * num2;
//             break;
//         case "/":
//             return num1 / num2;
//             break;
//         default:
//             return "operacion no soportada";
//             break;
//     }
// }

// let num1 = parseInt(prompt("ingrese un numero"));
// let num2 = parseInt(prompt("ingrese otro numero"));
// let resultado;
// let operacion = prompt("que operacion desea realizar?");

// resultado = calculadora(num1, num2, operacion);
// alert(resultado);

/* 

arrow function

const nombreFunction = (param1, param2) => codigo;

es como hacer una funcion inline. Contra: como es una constante, tiene que ser declarada antes de ser llamada

*/

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = (x) => x * 0.21;

let precioProducto = 1000;
let descuento = 100;

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
console.log(nuevoPrecio);