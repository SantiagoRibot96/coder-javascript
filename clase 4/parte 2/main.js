/* 
funcion de orden superior: es una funcion que recibe por parametro una funcion, o retorna una funcion
*/

// function mayorQue(n){
//     return(m) => m > n;
// }

// let mayorQueCinco = mayorQue(5);//ahora mayorQueCinco es igual a m => m > n con n=5

// console.log(mayorQueCinco(6));//Ahora la m=6, la funcion devuelve true porque 6 > 5

/* 
otro ejemplo
*/

// function generarOperacion(operacion){
//     if(operacion === "sumar"){
//         return (num1, num2) => num1 + num2;
//     }

//     if(operacion === "restar"){
//         return (num1, num2) => num1 - num2;
//     }

//     if(operacion === "multiplicar"){
//         return (num1, num2) => num1 * num2;
//     }

//     if(operacion === "dividir"){
//         return (num1, num2) => num1 / num2;
//     }
// }

// let suma = generarOperacion("sumar");
// console.log(suma(2, 5));

/* 
otro ejemplo: una funcion que recibe a otra como parametro
*/

// function iterador(arreglo, funcion){
//     for(const item of arreglo){
//         funcion(item);
//     }
// }

// iterador([12, 24, 56, 78, 5], console.log)

/* 
forEach y find
*/

// const productos = [
//     {id: 1, nombre: "media", precio: 1000},
//     {id: 2, nombre: "gorra", precio: 750},
//     {id: 3, nombre: "zapato", precio: 1200},
//     {id: 4, nombre: "camisa", precio: 375},
// ];

// // productos.forEach((item) => {
// //     console.log(item.nombre);
// //     console.log(item.precio);
// // });

// // const producto = productos.find((item) => item.nombre === "camisa");
// // console.log(producto);

// let nombre = prompt("ingrese el producto a verificar");

// while(nombre != "ESC"){

//     const producto = productos.find((item) => item.nombre === nombre);

//     if(producto){
//         let mensaje =`
//         ID: ${producto.id}
//         Nombre: ${producto.nombre}
//         Precio: ${producto.precio}
//         `;

//         alert(mensaje);
//     }else{
//         alert("producto no identificado")
//     }

//     nombre = prompt("ingrese el producto a verificar");
// }

/* 
filter filtra el arreglo dada una condicion
*/

// const productos = [
//     {id: 1, nombre: "media", precio: 1000},
//     {id: 2, nombre: "gorra", precio: 750},
//     {id: 3, nombre: "zapato", precio: 1200},
//     {id: 4, nombre: "camisa", precio: 375},
// ];

// const filtrados = productos.filter((item) => item.precio > 500);>
// console.log(filtrados);
// let precio = parseInt(prompt("Ingrese el precio"));

// const filtrados = productos.filter((item) => item.precio > precio);

// filtrados.forEach((item) =>{
//     alert(item.nombre);
// });

/* 
some valida si existe al menos un elemento que cumple la condicion
*/

// console.log(productos.some((item) => item.nombre === "camisa"));

/* 
map transforma la informacion
*/

// const productos = [
//     {id: 1, nombre: "media", precio: 1000},
//     {id: 2, nombre: "gorra", precio: 750},
//     {id: 3, nombre: "zapato", precio: 1200},
//     {id: 4, nombre: "camisa", precio: 375},
// ];

// // const  nombres = productos.map((item) => item.nombre);
// // console.log(nombres);

// // const  precios = productos.map((item) => item.precio);
// // console.log(precios);

// const nuevosPrecios = productos.map((item) => {
//     return{
//         id: item.id,
//         nombre: item.nombre,
//         precio: item.precio - item.precio*0.21,
//     };
// });

// console.log(nuevosPrecios);

/* 
reduce reduce un arreglo a un solo valor
*/

// const numeros = [2, 3, 5, 7, 8];
// const total = numeros.reduce((acumulador, item) => acumulador + item, 0);

// console.log(total);

// const productos = [
//     {id: 1, nombre: "media", precio: 1000},
//     {id: 2, nombre: "gorra", precio: 750},
//     {id: 3, nombre: "zapato", precio: 1200},
//     {id: 4, nombre: "camisa", precio: 375},
// ];

// const total = productos.reduce((acumulador, item) => acumulador + item.precio, 0);

// console.log(total);


/* 
sort ordena los elementos de mayor a menor
*/

// const numeros = [2, 3, 5, 7, 8];

// numeros.sort((a, b) => a - b);
// console.log(numeros);

// numeros.sort((a, b) => b - a);
// console.log(numeros);

// const productos = [
//     {id: 1, nombre: "media", precio: 1000},
//     {id: 2, nombre: "gorra", precio: 750},
//     {id: 3, nombre: "zapato", precio: 1200},
//     {id: 4, nombre: "camisa", precio: 375},
// ];

// console.log(
//     productos.sort((a, b) => {
//         if(a.nombre > b.nombre){
//             return 1;
//         }
//         if(a.nombre < b.nombre){
//             return -1;
//         }

//         return 0;
//     })
// );


/* 
objeto Math
*/

// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.max(3, 5, 7, 2, 19, 7));
// console.log(Math.min(3, 4, 67, 1, 23, 67));
// console.log(Math.max(3, 4, 6, 12, 5,2, Infinity, -Infinity));
// console.log(Math.ceil(3.15));
// console.log(Math.floor(3.75));
// console.log(Math.round(3.12));
// console.log(Math.sqrt(9));
// console.log(Math.round(Math.random()*100));

/* 
objeto Date
*/

console.log(Date());
console.log(new Date(2023, 7, 5));

let hoy = new Date(2023, 7, 5);
// console.log(hoy.toDateString);
// console.log(hoy.toLocaleString);
// console.log(hoy.toLocaleTimeString);
// console.log(hoy.toTimeString);

// console.log(hoy.getFullYear);
// console.log(hoy.getMonth);
// console.log(hoy.getDay);

const navidad = new Date("December 24, 2023");

console.log(navidad - hoy);

const milisegundosPorDia = 86400000;

console.log((navidad - hoy)/milisegundosPorDia);