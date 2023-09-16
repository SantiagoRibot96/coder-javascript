import { agregarJugador } from "./funciones.js";
import { quitarJugador } from "./funciones.js";
import { buscarJugador } from "./funciones.js";

export class Jugador{
    constructor(nombre, posicion, promedio){
        this.nombre = nombre;
        this.posicion = posicion;
        this.promedio = promedio;
        this.equipo = false;
    }
}

const loginPres = document.getElementById("login");

const agregarJugadorBoton = document.getElementById("agregarJugador");
const quitarJugadorBoton = document.getElementById("quitarJugador");
const buscarJugadorBoton = document.getElementById("buscarJugador");

agregarJugadorBoton.addEventListener("click", (e) => {

    if(!(loginPres.innerHTML.toLowerCase() === "login")){
        agregarJugador();
    }
});

quitarJugadorBoton.addEventListener("click", (e) => {
    
    if(!(loginPres.innerHTML.toLowerCase() === "login")){
        quitarJugador();
    }
});


buscarJugadorBoton.addEventListener("submit", (e) => {

    if(!(loginPres.innerHTML.toLowerCase() === "login")){
        let inputs = e.target.children;
        buscarJugador(inputs[0].value);
    }
});