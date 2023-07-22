//comentario de linea

/*
comentario
de
bloque
*/

/*declaracion de variables*/

let edad = 15;//creo la variable edad con el numero 15 - es un int

/*declaracion de constantes*/

const numero = 10;

/*utilizar camelCase para declarar variables.*/

let numeroUno = 3;
let numeroDos = 5;

let resultadoSuma = numeroUno + numeroDos;
let resultadoResta = numeroUno - numeroDos;
let resultadoMultiplicacion = numeroUno * numeroDos;
let resultadoDivision = numeroUno / numeroDos;

console.log("resultado suma:", resultadoSuma); //Muestra por consola lo que pongas entre parentesis.
console.log("resultado resta:", resultadoResta);
console.log("resultado multiplicacion:", resultadoMultiplicacion);
console.log("resultado division:", resultadoDivision);

let saludo = "hola";//es un string por eso las comillas
let nombre = "andres";

let saludoCompleto = saludo + " " + nombre;

console.log(saludoCompleto);

let nombreIngresado = prompt("Ingrese su nombre");//abre un cuadro de dialogo y lo guarda en la variable. Todo lo que se ingresa por prompt es un string
alert(nombreIngresado);//muestra un cuadro de dialogo que muestra lo que le ponen

console.log(typeof(numeroUno));
console.log(typeof(saludo));

/*
parseInt    => de string a int
parseFloat  => de string a float
Number      => de string a number
*/

let numeroIngresadoUno = prompt("Ingrese un numero");
let numeroIngresadoDos = prompt("Ingrese otro numero");

alert(numeroIngresadoUno + numeroIngresadoDos);
let numeroIngresadoUnoCast = Number(numeroIngresadoUno);
let numeroIngresadoDosCast = Number(numeroIngresadoDos);
alert(numeroIngresadoUnoCast + numeroIngresadoDosCast);

/*Puedo hacer el casteo de una*/

let numeroCasteado = Number(prompt("Ingrese un numero"));