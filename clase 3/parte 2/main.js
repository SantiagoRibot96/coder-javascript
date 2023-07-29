/* 

Estructura de un objeto

let objeto = {clave1: valor1, clave2: valor2, ...};

luego para acceder a cada valor => objeto.clave

*/

//let persona = {
//     nombre: "pablo",
//     edad: 25,
//     direccion: "Av siempreviva"
// };

// console.log(persona.nombre);

// let persona = {
//     nombre: "pablo",
//     edad: 25,
//     direccion: "Av siempreviva"
// };

// let clave = prompt("ingrese la clave");

// alert(persona[clave]);

/* 

funcion constructura de objetos

function Nombre(param1, param2, param3){
    this.clave1 = param1;
    this.clave2 = param2;
    this.clave3 = param3;
}

luego con new creamos un nuevo objeto

*/

// function Persona(nombre, edad, direccion){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccion = direccion;
// }

// const persona1 = new Persona("andres", 26, "AV Siempreviva");

// console.log(persona1.nombre);


// function Persona(info){
//     this.nombre = info.nombre;
//     this.edad = info.edad;
//     this.direccion = info.direccion;
//     this.hablar = function(){
//         console.log(`hola soy ${this.nombre}`);
//     }
// }

// const persona1 = new Persona({
//     nombre: "andres", 
//     edad: 25, 
//     direccion: "Av Siempreviva",
// });

// persona1.hablar();

/* 

clases

*/

// class Persona{
//     constructor(nombre, edad, direccion){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.direccion = direccion;
//     }

//     hablar(){
//         console.log(`hola soy ${this.nombre}`);
//     }
// }

// const persona1 = new Persona("andres", 25, "av");

// persona1.hablar();

/* 

ejemplo integral

*/

// class Producto{
//     constructor(nombre, precio, imagen){
//         this.nombre = nombre;
//         this.precio = precio;
//         this.imagen = imagen;
//         this.vendido = false;
//     }

//     vender(){
//         this.vendido = true;
//     }
// }

// const producto1 = new Producto(
//     "Monitor gamer curvo",
//     900456,
//     "http://blabla"
// );
// const producto2 = new Producto(
//     "Monitor gamer Samsung",
//     445002,
//     "http://daslsda"
// )

// console.log(producto1);
// producto1.vender();
// console.log(producto1);

class Producto{
    constructor(nombre, precio, imagen, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.cantidad = cantidad;
        this.vendido = false
    }

    vender(){
        if(this.cantidad > 0){
            this.cantidad --;

            if(this.cantidad === 0){
                this.vendido = true;
            }
        }else{
            console.log("ERROR: no hay mas producto!\n");
        }
    }
}

const producto1 = new Producto(
    "Monitor gamer curvo",
    900456,
    "http://blabla",
    3
);
const producto2 = new Producto(
    "Monitor gamer Samsung",
    445002,
    "http://daslsda",
    16
);

for(const clave in producto1){
    console.log(`${clave}: `, producto1[clave]);
}
console.log();

producto1.vender();
producto1.vender();
producto1.vender();
producto1.vender();

for(const clave in producto1){
    console.log(`${clave}: `, producto1[clave]);
}