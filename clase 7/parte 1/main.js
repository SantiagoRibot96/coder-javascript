/* 
operador ++
*/

// let numero = 5;
// numero = numero + 1;
// numero += 1;
// numero ++;

/* 
operador ternario

condicion ? codigo cuando la condicion es verdadera : codigo cuando la condicion es falsa;
*/

// let edad = 14;

// // if(edad >= 18){
// //     console.log("Eres mayor de edad");
// // }else{
// //     console.log("No eres mayor de edad");
// // }

// edad >= 18 ? console.log("Eres mayor de edad") : console.log("No eres mayor de edad");

// const usuario = {
//     nombre: "andres",
//     edad: 16,
// };

// const permiso =  usuario.edad >= 18 ? true : false;
// permiso ? console.log("Puedes entrar") : console.log("No puedes entrar");

/* 
operador & and |

valor1 && valor2 retorna valor1 si es falso. En caso contrario retorna valor2. Funciona como un ENTONCES
valor1 || valor2 retorna valor1 si es verdadero. En caso contrario retorna valor2.2222
*/

// const carrito = [];

// carrito.length === 0 && console.log("El carrito esta vacio");

/* 
Desestructuracion
*/

// const usuario = {
//   nombre: "andres",
//   edad: 40,
//   direccion: "AV",
//   telefonos: {
//     casa: 1234,
//     trabajo: 234,
//   },
// };

// const {
//   nombre: nombrePersona,
//   telefonos: { casa: casaTelefono },
// } = usuario;

// const mascota = {
//     nombre: "firu",
//     edad: 3,
//     propietarios: {
//         propietario1: {
//             nombre: "raquel",
//             edad: 24,
//         },
//         propietario2: {
//             nombre: "juan",
//             edad: 60,
//         },
//     },
// };

// const {
//     nombre,
//     edad,
//     propietarios: {
//         propietario1: {
//             nombre: nombrePropietario1,
//             edad: edadPropietario1,
//         },
//         propietario2: {
//             nombre: nombrePropietario2,
//             edad: edadPropietario2,
//         },
//     },
// } = mascota;

// console.log(edad);

// const productos = [
//     {
//     id: 1,
//     nombre: "camisa",
//     precio: 1000,
//     materiales: { material1: "tela", material2: "pintura" },
//     },
//     {
//     id: 2,
//     nombre: "gorra",
//     precio: 1000,
//     materiales: { material1: "tela", material2: "pintura" },
//     },
//     {
//     id: 3,
//     nombre: "media",
//     precio: 1000,
//     materiales: { material1: "tela", material2: "pintura" },
//     },
//     {
//     id: 4,
//     nombre: "zapato",
//     precio: 1000,
//     materiales: { material1: "tela", material2: "pintura" },
//     },
// ];

// productos.forEach((item) => {
//     const {
//         nombre,
//         id,
//         precio,
//         materiales: {material1, material2},
//     } = item;

//     console.log(nombre);
//     console.log(id);
//     console.log(precio);
//     console.log(material1, material2);
// });

/* 
operador spread
*/

// const nombres = ["juan", "Pedro", "Julieta", "Carlos"];
// console.log(...nombres);
// console.log(nombres.join(" "));

// const numeros = [4, 77, 92, 10, 3, -32, 54, 11];
// console.log(Math.max(...numeros));

// let nombre1 = "andres";
// let nombre2 = nombre1;

// nombre2 = "camila";
// console.log(nombre1);

// let persona1 = {
//     nombre: "andres",
//     edad: 45,
// };
// let persona2 = persona1;//paso por REFERENCIA el objeto (SOLO OBJETOS Y ARRAYS)

// persona2.nombre = "camila";
// console.log(persona1);

// let persona1 = {
//     nombre: "andres",
//     edad: 45,
// };
// let persona2 = {...persona1};//paso por VALOR el objeto

// persona2.nombre = "camila";
// console.log(persona1);

// let persona1 = {
//     nombre: "andres",
//     edad: 45,
// };
// let persona2 = {...persona1, nombre: "camila", direccion: "AV"};//paso por VALOR el objeto, le agrego cosas al objeto, cambio el nombre. Lo que esta lo sobreescribe y lo que no lo genera

// console.log(persona2);

// const sumar = (...numeros) => {
//     console.log(numeros.reduce((acum, item) => acum + item, 0));    
// };

// sumar(1, 2, 6, 8, 4, 1);