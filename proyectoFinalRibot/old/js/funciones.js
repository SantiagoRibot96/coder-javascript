import { Jugador } from "./main.js";

export function recuperarJugadores(jugadores){

    let usuarioActual = sessionStorage.getItem("usuarioActual");
    let jugadoresStorage = localStorage.getItem(usuarioActual);

    if(jugadoresStorage != null){
        jugadores = JSON.parse(jugadoresStorage);
        sessionStorage.setItem("jugadoresActual", JSON.stringify(jugadores));
    }else{
        jugadores = [];
        sessionStorage.setItem("jugadoresActual", JSON.stringify(jugadores));
    }
}

export function guardarJugadores(jugadores){
    localStorage.setItem(sessionStorage.getItem("usuarioActual"), JSON.stringify(jugadores));
    sessionStorage.setItem("usuarioActual", "");
    jugadores = [];
    sessionStorage.setItem("jugadoresActual", JSON.stringify(jugadores));

}

export function mostrarJugadores(){

    let div = document.getElementById("funcionesDiv");
    div.innerHTML = "";
    div.className = "row container-fluid";

    let jugadores = JSON.parse(sessionStorage.getItem("jugadoresActual"));

    ordenar(jugadores);

    jugadores.forEach((item) => {
        let mensaje = document.createElement("div");
        mensaje.className = "card text-bg-dark col-2";
        mensaje.innerHTML = `
        <img src="./imagenes/fifa-card.png" class="card-img">
        <div class="card-img-overlay">
            <h5 class="card-title">${item.nombre}</h5>
            <p class="card-text">Posicion: ${item.posicion}</p>
            <p class="card-text">Calificacion: ${item.promedio}</p>
            <img class="imagenEquipo" src="./imagenes/${item.equipo}.png" id="imagenEquipo${item.nombre}">  
        </div>
        `;
    
        div.append(mensaje);

        const imagenEquipoId = document.getElementById(`imagenEquipo${item.nombre}`);

        if(!item.equipo){
            imagenEquipoId.style.display = "none";
        }
    });
}

export function agregarJugador(){

    let jugadores = JSON.parse(sessionStorage.getItem("jugadoresActual"));

    jugadores
        ? false
        : jugadores = [];

    let div = document.getElementById("funcionesDiv");
    div.innerHTML = "";

    if(jugadores.length < 10){
        let mensaje = document.createElement("p");
        mensaje.innerHTML = `
        <h2 id="funcionesH2">Se pueden añadir hasta 10 jugadores. La cantidad actual de jugadores es: ${jugadores.length}</h2>
        <form id="formularioJugador" class="row">
            <input type="text" class="form-control col" placeholder="Nombre">
    
            <select id="opcionesJugador" class="form-select col" aria-label="Default select example">
                <option selected>Elija una opcion...</option>
                <option value="DEF">DEF</option>
                <option value="CEN">CEN</option>
                <option value="DEL">DEL</option>
            </select>
    
            <input type="text" class="form-control col" placeholder="Calificacion">
            <div class="col">
                <input type="submit" class="btn btn-primary">
                <button id="botonFin" class="btn btn-danger">Finalizar</button>
            </div>
        </form>
        `;
        div.append(mensaje);

        let formularioJugador = document.getElementById("formularioJugador");
        let botonFin = document.getElementById("botonFin");
        let funcionesH2 = document.getElementById("funcionesH2");
        let nombreIngresado;
        let posicionIngresado;
        let promedioIngresado;
    
        formularioJugador.addEventListener("submit", (e) => {
            e.preventDefault();
    
            let inputs = e.target.children;
    
            nombreIngresado = inputs[0].value;
            posicionIngresado = inputs[1].value;
            promedioIngresado = inputs[2].value;
    
            if(jugadores.length >= 10){
                Swal.fire({
                    title: `Solo se pueden ingresar hasta 10 jugadores`,
                })
                mostrarJugadores();
            }else{
                jugadores.push(new Jugador(nombreIngresado.toLowerCase(), posicionIngresado, parseFloat(promedioIngresado)));
                sessionStorage.setItem("jugadoresActual", JSON.stringify(jugadores));
                funcionesH2.innerHTML = `Se pueden añadir hasta 10 jugadores. La cantidad actual de jugadores es: ${jugadores.length}`;
                formularioJugador.reset();
            }
        });
    
        botonFin.onclick = () => {
            mostrarJugadores();
        };
    }else{
        Swal.fire({
            title: `Solo se pueden ingresar hasta 10 jugadores`,
        })
        mostrarJugadores();
    }

    fetch("https://raw.githubusercontent.com/SantiagoRibot96/javaScript-simuladorDeFulbito/master/db/jugadoresDB.json")
        .then((response) => response.json())
            .then((data) => {
                data.forEach((item) => {
                    if(jugadores.length < 10){
                        let mensaje2 = document.createElement("div");
                        mensaje2.className = "card text-bg-dark col-2";
                        mensaje2.innerHTML = `
                        <img src="./imagenes/fifa-card.png" class="card-img">
                        <div class="card-img-overlay">
                            <h5 class="card-title">${item.nombre}</h5>
                            <p class="card-text">Posicion: ${item.posicion}</p>
                            <p class="card-text">Calificacion: ${item.promedio}</p>
                            <img class="imagenEquipo" src="./imagenes/${item.equipo}.png" id="imagenEquipo${item.nombre}">
                            <a class="btn btn-success" id="boton${item.nombre}">Agregar jugador</a>  
                        </div>
                        `;
                    
                        div.append(mensaje2);

                        const imagenEquipoId = document.getElementById(`imagenEquipo${item.nombre}`);

                        if(!item.equipo){
                            imagenEquipoId.style.display = "none";
                        }

                        const botonAgregar = document.getElementById(`boton${item.nombre}`);
    
                        botonAgregar.addEventListener("click", () => {
                            if(jugadores.length >= 10){
                                Swal.fire({
                                    title: `Solo se puede ingresar hasta 10 jugadores`
                                });
                                mensaje2.innerHTML = ``;
                                div.append(mensaje2);
                                mostrarJugadores();
                            }else{
                                jugadores.push(new Jugador(item.nombre.toLowerCase(), item.posicion, parseFloat(item.promedio)));
                                sessionStorage.setItem("jugadoresActual", JSON.stringify(jugadores));
                                agregarJugador();
                            }
                        })
                    }
                });
            });
}

export function quitarJugador(){
    let div = document.getElementById("funcionesDiv");
    div.innerHTML = "";
    div.className = "row container-fluid";

    let jugadores = JSON.parse(sessionStorage.getItem("jugadoresActual"));

    ordenar(jugadores);

    jugadores.forEach((item) => {
        let mensaje = document.createElement("div");
        mensaje.className = "card text-bg-dark col-2";
        mensaje.innerHTML = `
        <img src="./imagenes/fifa-card.png" class="card-img">
        <div class="card-img-overlay">
            <h5 class="card-title">${item.nombre}</h5>
            <p class="card-text">Posicion: ${item.posicion}</p>
            <p class="card-text">Calificacion: ${item.promedio}</p>
            <img class="imagenEquipo" src="./imagenes/${item.equipo}.png">
            <a class="btn btn-danger" id="boton${item.nombre}">Quitar jugador</a>
        </div>
        `;
        div.append(mensaje);

        const botonQuitar = document.getElementById(`boton${item.nombre}`);

        botonQuitar.addEventListener("click", () => {
            const indexJugador = jugadores.findIndex((producto) => producto.nombre === item.nombre);
            jugadores.splice(indexJugador, 1);
            sessionStorage.setItem("jugadoresActual", JSON.stringify(jugadores));
            quitarJugador();
        });
    });

    let mensaje = document.createElement("div");
    mensaje.innerHTML = `
        <a class="btn btn-success" id="botonFin">Finalizar</a>
    `;
    div.append(mensaje);

    const botonFin = document.getElementById("botonFin");

    botonFin.addEventListener("click", () => {
        mostrarJugadores();
    })
}

export function buscarJugador(jugador){

    let jugadores = JSON.parse(sessionStorage.getItem("jugadoresActual"));

    const jugadorBuscado = jugadores.find((item) => item.nombre === jugador);

    let div = document.getElementById("funcionesDiv");
    div.innerHTML = "";
    div.className = "row container-fluid"; 

    if(jugadorBuscado){
        let mensaje = document.createElement("div");
        mensaje.className = "card text-bg-dark col-2";
        mensaje.innerHTML = `
        <img src="./imagenes/fifa-card.png" class="card-img">
        <div class="card-img-overlay">
            <h5 class="card-title">${jugadorBuscado.nombre}</h5>
            <p class="card-text">Posicion: ${jugadorBuscado.posicion}</p>
            <p class="card-text">Calificacion: ${jugadorBuscado.promedio}</p>
            <img class="imagenEquipo" src="../imagenes/${jugadorBuscado.equipo}.png" id="imagenEquipo${jugadorBuscado.nombre}">
            <a class="btn btn-success" id="botonOk">OK</a>
        </div>
        `;
        div.append(mensaje);

        const imagenEquipoId = document.getElementById(`imagenEquipo${jugadorBuscado.nombre}`);

        if(!jugadorBuscado.equipo){
            imagenEquipoId.style.display = "none";
        }

        const botonOk = document.getElementById("botonOk");

        botonOk.addEventListener("click", () => {
            mostrarJugadores();
        })
    }
}

export function armarEquipo(){

    let jugadores = JSON.parse(sessionStorage.getItem("jugadoresActual"));

    let equipo = 0;
    let cantidadDEF = 0;
    let cantidadDEL = 0;
    let cantidadCEN = 0;

    while(true){
        for (const item of jugadores) {

            asignar(item);
            
            if(item.equipo === "boca"){
                equipo++;
    
                if(item.posicion.toLowerCase() === "del"){
                    cantidadDEL++;
                }else if(item.posicion.toLowerCase() === "def"){
                    cantidadDEF++;
                }else if(item.posicion.toLowerCase() === "del"){
                    cantidadCEN++;
                }
            }else if(item.equipo === "river"){
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

            if(promedio("boca", jugadores) - promedio("river", jugadores) <= 1 && promedio("boca", jugadores) - promedio("river", jugadores) >= -1){//Si el promedio de ambos equipos es similar (distancia de 1)

                if((cantidadDEL <= 1 && cantidadDEL >= -1) && (cantidadDEF <= 1 && cantidadDEF >= -1) && (cantidadCEN <= 1 && cantidadCEN >= -1)){
                    sessionStorage.setItem("jugadoresActual", JSON.stringify(jugadores));
                    mostrarJugadores();
                    break;
                }
            }
        }
    
        equipo = 0;
        cantidadDEF = 0;
        cantidadDEL = 0;
        cantidadCEN = 0;
    }
}

function asignar(item){
    if(Math.random()*10 > 5){
        item.equipo = "boca";
    }else{
        item.equipo = "river";
    }
}

function promedio(nombreEquipo, jugadores){
    let sumaParcial = 0;

    for (const item of jugadores) {
        if(item.equipo === nombreEquipo){
            sumaParcial = sumaParcial + item.promedio;
        }
    }

    return(sumaParcial/(jugadores.length/2));
}

function ordenar(jugadores){
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