import { agregarJugador } from "./funciones";
import { quitarJugador } from "./funciones";
import { buscarJugador } from "./funciones";

class Jugador{
    constructor(nombre, posicion, promedio){
        this.nombre = nombre;
        this.posicion = posicion;
        this.promedio = promedio;
        this.equipo = false;
    }
}

const agregarJugador = document.getElementById("agregarJugador");
const quitarJugador = document.getElementById("quitarJugador");
const buscarJugador = document.getElementById("buscarJugador");

agregarJugador.addEventListener("click", (e) => {
    agregarJugador();
});

quitarJugador.addEventListener("click", (e) => {
    quitarJugador();
});


buscarJugador.addEventListener("submit", (e) => {
    let inputs = e.target.children;
    buscarJugador(inputs[0].value);
});