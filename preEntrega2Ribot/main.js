/* 
Programa que pide por prompt que ingreses jugadores de futbol y alguna de sus caracteristicas principales. Luego devuelve dos equipos random de futbol 5, balanceados.

Por dentro los jugadores se guardan en un array y se crean de forma dinamica al ser ingresados.
*/

class Jugador{
    constructor(nombre, posicion, promedio){
        this.nombre = nombre;
        this.posicion = posicion;
        this.promedio = promedio;
    }
}

function buscarJugador(){
    nombreIngresado = prompt("Ingrese el nombre del jugador que desea consultar. En caso de no querer consultar mas puede poner la palabra FIN");

    while(nombreIngresado.toLowerCase() != "fin"){
        let jugadorBuscado;
    
        for(const item of jugadores){
            if(item.nombre === nombreIngresado){
                jugadorBuscado = item;
            }
        }
        
        if(jugadorBuscado){
            let mensaje = `
                Nombre: ${jugadorBuscado.nombre}
                Posicion: ${jugadorBuscado.posicion}
                Promedio: ${jugadorBuscado.promedio}
                `;
        
            alert(mensaje);
        }else{
            alert("Jugador no encontrado");
        }
    
        nombreIngresado = prompt("Ingrese el nombre del jugador que desea consultar. En caso de no querer consultar mas puede poner la palabra FIN");
    }
}

const jugadores = [];

alert("El siguiente programa pide por prompt el nombre de un jugador, su posicion y el promedio (del 1 al 10).\n\nEn caso de poner FIN en alguna de las preguntas, el programa termina y la pagina debera ser refrescada");

let nombreIngresado = prompt("Ingrese el nombre del jugador");
let posicionIngresado;
let promedioIngresado;

while(nombreIngresado.toLowerCase() != "fin"){
    posicionIngresado = prompt("ingrese la posicion del jugador");

    while(posicionIngresado.toLowerCase() != "fin"){
        promedioIngresado = prompt("ingrese la calificacion promedio del jugador");

        while(promedioIngresado.toLowerCase() != "fin" && parseFloat(promedioIngresado) >= 1 && parseFloat(promedioIngresado) <= 10){
            jugadores.push(new Jugador(nombreIngresado, posicionIngresado, promedioIngresado));
            break;
        }

        break;
    }

    if(posicionIngresado.toLowerCase() != "fin" && promedioIngresado.toLowerCase() != "fin"){
        nombreIngresado = prompt("Ingrese el nombre del jugador. Recuerde que si no quiere añadir mas jugadores puede poner la palabra FIN");
    }else{
        break;
    }
}

buscarJugador();