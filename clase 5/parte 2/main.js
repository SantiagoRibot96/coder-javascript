/* 
Eventos (botones por ejemplo) 
click
dblclick
*/

// let boton = document.getElementById("boton");

// boton.addEventListener("click", () => {
//     alert("click");
// });

// boton.onclick = () => {
//     alert("click");
// };

// let evento = prompt("ingrese el evento");
// boton.addEventListener(evento, () => {
//     alert(evento);
// });

// let boton = document.getElementById("boton");

// const respuesta = (nombre) => {
//     console.log(`Hola ${nombre}`);
// };

// boton.addEventListener("click", () => respuesta("andres"));

/* 
Eventos del mouse:
-click
-dblclick
-mousedown  -con presionarlo ya funciona
-mouseup    -se ejecuta cunado se suelta el mouse. Similar al click pero mas veloz
-mouseover  -se ejecuta con tan solo pasar el mouse por encima (hover)
-mouseout   -se ejecuta cuando salgo del boton
-mousemove  -con moverme dentro del elemento ya lo ejecuta

Eventos del teclado:
keydown
keyup
change
input
submit
*/

// let nombre = document.getElementById("nombre");
// let saludo = document.getElementById("saludo");

// nombre.addEventListener("keyup", (e) => {
//     if(e.key === "a"){
//         saludo.className = "verde";
//     }else if(e.key === "s"){
//         saludo.className = "amarillo";
//     }else if(e.key === "d"){
//         saludo.className = "rojo";
//     }else{
//         saludo.className = "verde";
//     }
// });

// nombre.addEventListener("input", () => {
//     if(!nombre.value.includes("@")){
//         saludo.className = "rojo";
//     }else{
//         saludo.className = "verde";
//     }
// });

let formulario = document.getElementById("formulario");
let saludo = document.getElementById("saludo");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let inputs = e.target.children;
    // console.log(inputs[0].value);
    // console.log(inputs[1].value);

    if (!inputs[0].value.includes("@")){
        saludo.className = "verde";
    }else{
        saludo.className = "rojo";
    }
});