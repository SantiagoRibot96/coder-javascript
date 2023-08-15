/* 
Programa que pide por prompt que ingreses jugadores de futbol y alguna de sus caracteristicas principales. Luego devuelve dos equipos random de futbol 5, balanceados.

Por dentro los jugadores se guardan en un array y se crean de forma dinamica al ser ingresados.
*/






/* 
///////////////////////////////////////////////////////////////////////////////////
Declaracion de funciones
///////////////////////////////////////////////////////////////////////////////////
*/





class Jugador{
    constructor(nombre, posicion, promedio){
        this.nombre = nombre;
        this.posicion = posicion;
        this.promedio = promedio;
        this.equipo = false;
    }

    asignar(){
        if(Math.random()*10 > 5){
            this.equipo = "A";
        }else{
            this.equipo = "B";
        }
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
                Equipo: ${jugadorBuscado.equipo}
                `;
        
            alert(mensaje);
        }else{
            alert("Jugador no encontrado");
        }
    
        nombreIngresado = prompt("Ingrese el nombre del jugador que desea consultar. En caso de no querer consultar mas puede poner la palabra FIN");
    }
}

function ordenar(){
    jugadores.sort(function (a, b) {
        if (a.equipo < b.equipo) {
            return -1;
        }
        if (a.equipo > b.equipo) {
            return 1;
        }
        
        return 0;
    });
}

function mostrarJugadores(){
    for (const item of jugadores) {
        let mensaje = `
        Nombre: ${item.nombre}
        Posicion: ${item.posicion}
        Promedio: ${item.promedio}
        Equipo: ${item.equipo}
        `;

        alert(mensaje);
    }
}

function mostrarEquipos(){

    ordenar();

    let mensaje = `
    Equipo A
    Nombre:     ${jugadores[0].nombre}     ${jugadores[1].nombre}      ${jugadores[2].nombre}      ${jugadores[3].nombre}      ${jugadores[4].nombre}
    Promedio:   ${promedio("A")}
    `;

    alert(mensaje);

    mensaje = `
    Equipo B
    Nombre:     ${jugadores[5].nombre}     ${jugadores[6].nombre}      ${jugadores[7].nombre}      ${jugadores[8].nombre}      ${jugadores[9].nombre}
    Promedio:   ${promedio("B")}
    `;

    alert(mensaje);
}

function promedio(nombreEquipo){
    let sumaParcial = 0;

    for (const item of jugadores) {
        if(item.equipo === nombreEquipo){
            sumaParcial = sumaParcial + item.promedio;
        }
    }

    return(sumaParcial/(jugadores.length/2));
}

function hallarEquipo(){

    let equipo = 0;
    let cantidadDEF = 0;
    let cantidadDEL = 0;
    let cantidadCEN = 0;

    while(true){
        for (const item of jugadores) {
            item.asignar();
            
            if(item.equipo === "A"){
                equipo++;
    
                if(item.posicion.toLowerCase() === "del"){
                    cantidadDEL++;
                }else if(item.posicion.toLowerCase() === "def"){
                    cantidadDEF++;
                }else if(item.posicion.toLowerCase() === "del"){
                    cantidadCEN++;
                }
            }else if(item.equipo === "B"){
                equipo--;
    
                if(item.posicion.toLowerCase() === "del"){
                    cantidadDEL--;
                }else if(item.posicion.toLowerCase() === "def"){
                    cantidadDEF--;
                }else if(item.posicion.toLowerCase() === "del"){
                    cantidadCEN--;
                }
            }
        }
    
        if(equipo >= -1 && equipo <= 1){//Si ambos equipos tienen la misma cantidad de jugadores o su diferencia es menor a 1 para el caso que sean impares
    
            if(promedio("A") - promedio("B") <= 1 && promedio("A") - promedio("B") >= -1){//Si el promedio de ambos equipos es similar (distancia de 1)
                if((cantidadDEL <= 1 && cantidadDEL >= -1) && (cantidadDEF <= 1 && cantidadDEF >= -1) && (cantidadCEN <= 1 && cantidadCEN >= -1)){
                    break;
                }
            }
        }
    
        equipoA = 0;
        equipoB = 0;
        cantidadDEF = 0;
        cantidadDEL = 0;
        cantidadCEN = 0;
    }
}

function agregarJugador(){

    alert(`Se pueden añadir hasta 10 jugadores.La cantidad actual de jugadores es: ${jugadores.length}`);

    let nombreIngresado = prompt("Ingrese el nombre del jugador. En caso de no querer ingresar un nuevo jugador escriba FIN");
    let posicionIngresado;
    let promedioIngresado;
    
    while(nombreIngresado.toLowerCase() != "fin" && jugadores.length < 10){
        posicionIngresado = prompt("ingrese la posicion del jugador (DEL, CEN, DEF)");
    
        while(posicionIngresado.toLowerCase() != "del" && posicionIngresado.toLowerCase() != "def" && posicionIngresado.toLowerCase() != "cen"){//validacion de entrada
            posicionIngresado = prompt("Por favor, escoja una posicion entre DEL, CEN o DEF");
        }
    
        while(true){
            promedioIngresado = prompt("ingrese la calificacion promedio del jugador (del 1 al 10)");
    
            while(!(parseFloat(promedioIngresado) >= 1 && parseFloat(promedioIngresado) <= 10)){//Validacion de entrada
                promedioIngresado = prompt("Por favor, ingrese un numero del 1 al 10");
            }
    
            jugadores.push(new Jugador(nombreIngresado, posicionIngresado, parseFloat(promedioIngresado)));
            break;
        }
    
        if(jugadores.length < 10){
            nombreIngresado = prompt(`Ingrese el nombre del jugador. Recuerde que si no quiere añadir mas jugadores puede poner la palabra FIN. La cantidad de jugadores ingresada es de ${jugadores.length}`);
        }else{
            break;
        }
    }

    if(jugadores.length === 10){
        alert("Cantidad maxima de jugadores ingresados");
    }
}

function eliminarJugador(nombreJugador){
    alert(`${jugadores.indexOf(nombreJugador)} ${nombreJugador}`);
    if(jugadores.indexOf(nombreJugador) > -1){
        jugadores.splice(jugadores.indexOf(nombreJugador), 1);
        alert(`Se ha eliminado el jugador ${nombreJugador} de la plantilla`);
    }else{
        alert(`El jugador ${nombreJugador} no fue encontrado. Recuerde que el sistema es sencible a las mayusculas`);
    }
}





/* 
///////////////////////////////////////////////////////////////////////////////////
Inicio del programa
///////////////////////////////////////////////////////////////////////////////////
*/





const jugadores = [];

jugadores.push(new Jugador("Ronaldo", "DEL", 9));
jugadores.push(new Jugador("Riquelme", "CEN", 8));
jugadores.push(new Jugador("Messi", "DEL", 10));
jugadores.push(new Jugador("Puyol", "DEF", 7));
jugadores.push(new Jugador("Ramos", "DEF", 9));
jugadores.push(new Jugador("Ribot", "CEN", 7));
jugadores.push(new Jugador("Pepe", "DEL", 4));
jugadores.push(new Jugador("Carlos", "DEF", 5));
jugadores.push(new Jugador("Juan", "CEN", 2));

let respuesta = prompt(`Desea utilizar los ${jugadores.length} precargados? S/N`).toLowerCase();

while(true){
    if( respuesta === "n"){

        while(jugadores.length > 0){
            jugadores.pop();
        }
    }else if(respuesta === "s"){
        break;
    }else{
        respuesta = prompt(`Desea utilizar los ${jugadores.length} precargados? S/N`).toLowerCase();
    }
}

while(respuesta){

    respuesta = prompt(`
    Que desea hacer?
    1)Agregar un jugador nuevo
    2)Eliminar un jugador de la plantilla
    3)Buscar un jugador en la plantilla
    4)Hallar un equipo al azar con la plantilla actual
    5)Mostrar los jugadores de la plantilla
    6)Mostrar los dos equipos generados
    7)Terminar el programa

    Cantidad de jugadores: ${jugadores.length}
    `);

    switch (parseInt(respuesta)) {
        case 1:
            agregarJugador();
            break;
    
        case 2:
            let nombreJugadorEliminado = prompt("Ingrese el nombre del jugador a eliminar. El sistema reconoce las mayusculas!");
            eliminarJugador(nombreJugadorEliminado);
            break;
    
        case 3:
            buscarJugador();
            break;
    
        case 4:
            hallarEquipo();
            break;
    
        case 5:
            mostrarJugadores();
            break;
    
        case 6:
            mostrarEquipos();
            break;

        case 7:
            if(prompt("Seguro desea terminar? Su progreso sera eliminado. S/N").toLowerCase() === "s"){
                respuesta = false;
            }
            break;
    
        default:

            break;
    }

}