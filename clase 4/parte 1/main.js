/* 
estructura de un array

const nombre = [elemento1, elemento2, ...]
*/

// const vacio = [];
// const numeros = [3, 4, 67];
// const nombres = ["andres", "camila", "sofi"];
// const valores = [true, false, true, false];
// const varios = [1, "andres", true];

// console.log(nombres[0]);
// console.log(numeros[0] + numeros[2]);


/* 
recorrer con un for
*/

// const nombres = ["andres", "camila", "sofi", "vanesa"];

// for(let index = 0; index < nombres.length; index++){
//     console.log(nombres[index]);
// }

/* 
como modificar el array
*/

// const nombres = ["andres", "camila"];

// nombres.push("sofia");//agrega al final
// console.log(nombres);

// nombres.unshift("matias");//agrega al inicio
// console.log(nombres);

// nombres.pop();//quita un elemento del final
// console.log(nombres);

// nombres.shift();//quita un elemento del inicio
// console.log(nombres);

/* 
splice permite eliminar una cantidad de elementos
splice(donde me paro, cuantos elementos borro desde donde me paro)
splice devuelve un array con los elementos eliminados
splice puede agregar donde quieras un nuevo elemento
*/

// const nombres = ["andres", "camila", "sofi", "vanesa", "carlos"];
// nombres.splice(1, 3);
// console.log(nombres);

// nombres.splice(1, 0, "pepe");
// console.log(nombres);

/* 
join permite generar un string con todos los elementos del arreglo
*/

// const nombres = ["andres", "camila", "sofi", "vanesa", "carlos"];
// console.log(nombres.join(" "));

/*
concat permite generar un arreglo con los elementos de varios arreglos 
*/

// const nombres = ["andres", "camila", "sofi", "vanesa", "carlos"];
// const mascotas = ["firu", "max"];
// const varios = nombres.concat(mascotas);
// console.log(varios);

/* 
slice permite hacer una copia de una parte del arreglo
*/

// const nombres = ["andres", "camila", "sofi", "vanesa", "carlos"];
// const copia = nombres.slice(2, 4);
// console.log(copia);

/* 
indexOf permite buscar la posicion de un elemento pasado por parametro. Si no encuentra el elemento devuelve -1
*/

// const nombres = ["andres", "camila", "sofi", "vanesa", "carlos"];
// console.log(nombres.indexOf("camila"));

/* 
include permite validar si un elemento esta o no dentro del array
*/

// const nombres = ["andres", "camila", "sofi", "vanesa", "carlos"];
// console.log(nombres.includes("pepito"));
// console.log(nombres.includes("carlos"));

/* 
reverse invierte el arreglo
*/

// const nombres = ["andres", "camila", "sofi", "vanesa", "carlos"];

// nombres.reverse();
// console.log(nombres);

/* 
un ejemplo de una funcion que eliminia un nombre en especifico del array
*/

// const nombres = ["andres", "camila", "sofi", "vanesa", "carlos"];

// const eliminar = (nombre) => {
//     let index = nombres.indexOf(nombre);

//     if(index != -1){
//         nombres.splice(index, 1);
//         console.log(nombres);
//     }
// }

// eliminar("vanesa");

// const productos = [
//     {id: 1, nombre: "camisa", precio: 1000},
//     {id: 2, nombre: "zapato", precio: 800},
//     {id: 3, nombre: "media", precio: 350},
//     {id: 3, nombre: "gorra", precio: 770},
// ];

// for(const item of productos){
//     console.log(item);
// }

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        this.vendido = false;
    }

    vender(){
        this.vendido = true;
    }
}

const productos = [];

productos.push(new Producto("camisa", 1000));
productos.push(new Producto("zapato", 800));
productos.push(new Producto("media", 350));
productos.push(new Producto("gorra", 770));

let nombre = prompt("ingrese el nombre del producto a consultar");

while(nombre != "ESC"){
    let producto;

    for(const item of productos){
        if(item.nombre === nombre){
            producto = item;
        }
    }
    
    if(producto){
        let mensaje = `
            Nombre: ${producto.nombre}
            Precio: ${producto.precio}
            `;
    
        alert(mensaje);
    }else{
        alert("producto no encontrado");
    }

    nombre = prompt("ingrese el nombre del producto a consultar");
}

