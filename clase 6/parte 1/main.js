/* 
localStorage guarda en capcha la informacion. Puedo cerrar el navegador, refrescar la pagina, apagar la PC. Si elimino los datos de la pagina se borran
*/

// console.log(localStorage);

// let nombre = localStorage.getItem("nombre");
// console.log(nombre);

// localStorage.setItem("nombre", "andres");
// localStorage.setItem("valor", "true");
// localStorage.setItem("numero", "4");

// for(let index = 0; index < localStorage.length; index++){
//     let clave = localStorage.key(index);//devuelve la clave en funcion de su indice
//     console.log("Clave obtenida ", clave);
//     console.log("Valor obtenido ", localStorage.getItem(clave));//devuelve el valor en funcion de la clave
// }

/* 
Eliminar el Storage
*/

// localStorage.removeItem("nombre");
// localStorage.clear();

/* 
sesionStorage guarda la sesion. Si cierro la pagina ya se borra
*/

/* 
Formato JSON: Para guardar un objeto hay que utilizar JSON.stringify
*/

// let objeto = {
//     nombre: "pepe",
//     edad: 25,
// };

// localStorage.setItem("objeto", JSON.stringify(objeto));

// let numeros = [1, 5, 7, 2];
// localStorage.setItem("numeros", JSON.stringify(numeros));

// let objeto = localStorage.getItem("objeto");
// console.log(JSON.parse(objeto));

// const productos = [
//     {id: 1, nombre: "camisa", precio:1000},
//     {id: 2, nombre: "gorra", precio:200},
//     {id: 3, nombre: "zapato", precio:400},
//     {id: 4, nombre: "media", precio:700},
// ];

// const guardarStorage = (clave, valor) => {
//     localStorage.setItem(clave, valor);
// };

// productos.forEach((item) => {
//     guardarStorage(item.id, JSON.stringify(item));
// });

/* 
Ejemplo
*/

// let usuario;
// let usuarioStorage = localStorage.getItem("usuario");

// if (usuarioStorage) {
//     usuario = usuarioStorage;
//     alert(`Hola de nuevo ${usuario}`);
// }else{
//     usuario = prompt("Ingrese su usuario");
//     alert(`Bienvenido por primera vez ${usuario}`);
//     localStorage.setItem("usuario", usuario);
// }

/* 
otro ejemplo
*/

const productos = [
    {id: 1, nombre: "camisa", precio:1000},
    {id: 2, nombre: "gorra", precio:200},
    {id: 3, nombre: "zapato", precio:400},
    {id: 4, nombre: "media", precio:700},
];

localStorage.setItem("carrito", JSON.stringify(productos));


let eliminar = document.getElementById("eliminar");
let carrito = [];

let carritoStorage = localStorage.getItem("carrito");

if (carritoStorage) {
    carrito = JSON.parse(carritoStorage);
} else {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>No hay productos en el carrito</h2>
    `;

    document.body.append(div);
}

carrito.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>ID: ${item.id}</h2>
    <h2>Nombre: ${item.nombre}</h2>
    <h2>Precio: ${item.precio}</h2>
    `;

    document.body.append(div);
});

eliminar.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
    alert("Carrito eliminado");
});