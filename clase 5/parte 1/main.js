/* 
getElementById
*/

// let div = document.getElementById("aplicacion");
// console.log(div);
// console.log(div.innerHTML);
// console.log(div.innerText);

// let parrafo = document.getElementById("parrafo");
// console.log(parrafo);
// console.log(parrafo.innerHTML);
// console.log(parrafo.innerText);

/* 
getElementsByClassName
*/

// let perritos = document.getElementsByClassName("perritos");
// console.log(perritos);//es un HTML collection (similar a un array)
// // console.log(perritos[0].innerHTML);
// // console.log(perritos[1].innerHTML);
// // console.log(perritos[2].innerHTML);

// for (const perrito of perritos) {
//     console.log(perrito.innerHTML);
// }

/* 
getElementsByTagName
*/

// let divs = document.getElementsByTagName("div");

// console.log(divs);

// let saludo = document.getElementById("saludo");

// let seccion = prompt("Ingrese la seccion deseada");

// if(seccion === "carrito"){
//     saludo.innerHTML = "<h1>Bienvenido al carrito</h1>";
//     saludo.className = "rojo";
// }else if(seccion === "favoritos"){
//     saludo.innerHTML = "<h1>Bienvenido al favoritos</h1>";
//     saludo.className = "verde";
// }else if(seccion === "toemofsd"){
//     saludo.innerHTML = "<h1>Bienvenido al toemofsd</h1>";
//     saludo.className = "amarillo";
// }

/* 
Agregar o quitar nodos
*/

// let contenedor = document.getElementById("contenedor");
// let parrafo = document.createElement("p");//creacion del nodo
// parrafo.innerHTML = "<h1>Hola Mundo!</h1>";//creacion del contenido
//  // document.body.append(parrafo);//agrego el nodo al body
// contenedor.append(parrafo);//agrego el nodo a un contenedor en especial

// contenedor.remove();

// let contenedor = document.getElementById("contenedor");
// const personas = ["juan", "luis", "camila", "andres"];

// personas.forEach(item => {
//     let div = document.createElement("div");
//     div.innerHTML = `<h1>${item}</h1>`;
//     document.body.append(div);
// });

/* 
Como crear una card de un producto por ejemplo
*/

let contenedor = document.getElementById("contenedor");

const productos = [
    {id: 1, nombre: "camisa", precio:1000},
    {id: 2, nombre: "gorra", precio: 450},
    {id: 3, nombre: "media", precio:370},
    {id: 4, nombre: "zapato", precio: 200},
];

productos.forEach((item) => {
    let div = document.createElement("div");
    div.className = "verde";
    div.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
    `;

    contenedor.append(div);
});