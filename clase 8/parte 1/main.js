/* 
funciones asincronicas
    -setTimeout(funcion, tiempo en ms)
*/

// setTimeout(() => {
//     console.log("hola");
// }, 3000);//Una funcion que se va a ejecutar despues de 3000ms

// console.log("inicio");

// setTimeout(() => {
//     console.log("intermedio");
// }, 1000);//lo lee y se lo lleva a las webappis

// console.log("final");

// let boton = document.getElementById("boton");
// let saludo = document.getElementById("saludo");

// boton.addEventListener("click", () => {
//     saludo.classList.add("color");

//     setTimeout(() => {
//         saludo.classList.remove("color");
//     }, 3000);
// });

// for(let letra of "hola"){
//     setTimeout(() => {
//         console.log(letra);
//     }, 1000);
// }

// for(let letra of "mundo"){
//     setTimeout(() => {
//         console.log(letra);
//     }, 1000);
// }

/* 
callstack: pila de ejecucion.
eventloop: se encarga de sincronizar todo.
*/

// console.log("inicio");

// setTimeout(() => {
//     console.log("intermedio");
// }, 0);

// console.log("final");

// function multiply(x, y) {
//     return x * y;
// }

// function printSquare(x) {
//     let resultado = multiply(x, x);
//     console.log(resultado);
// }

// printSquare(5);

// setInterval(() => {
//     console.log("proceso ejecutado");
// }, 3000);

// let counter = 0;
// const interval = setInterval(() => {
//     counter++;
//     console.log("counter: ", counter);

//     if(counter >= 5){
//         clearInterval(interval);
//         console.log("Se ha limpiado el intervalo");
//     }
// }, 1000);

/* 
promesas:
    -pending
    -fullfy
    -regected
*/

// new Promise((resolve, reject) => {
//     //cuerpo de la promesa
// });

// const futuro = (valor) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             valor ? resolve("promesa resuelta") : reject("promesa rechazada");
//         }, 3000);
//     });
// };

// console.log(futuro(true));

/* 
.then y .catch
*/

const futuro = (valor) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            valor
                ? resolve("promesa resuelta")
                : reject("promesa rechazada");
        }, 3000);
    });
};

futuro(true)
    .catch((error) => console.log(error))//captura el posible error
    .then((respuesta) => console.log(respuesta));//capturo la respuesta satisfactoria

