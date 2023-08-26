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

const mascota = {
    nombre: "firu",
    edad: 3,
    propietarios: {
        propietario1: {
            nombre: "raquel",
            edad: 24,
        },
        propietario2: {
            nombre: "juan",
            edad: 60,
        },
    },
};

const {
    nombre: nombreMascota,
    edad: edadMascota,
    propietarios: {
        propietario1: {
            nombre: nombrePropietario1,
            edad: edadPropietario1,
        },
        propietario2: {
            nombre: nombrePropietario2,
            edad: edadPropietario2,
        },
    },
} = mascota;