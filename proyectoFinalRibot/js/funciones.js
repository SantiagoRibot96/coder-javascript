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

    jugadores.forEach((item) => {
        let mensaje = document.createElement("div");
        mensaje.className = "card text-bg-dark";
        mensaje.innerHTML = `
        <img src="./fifa-card.png" class="card-img">
        <div class="card-img-overlay">
            <h5 class="card-title">${item.nombre}</h5>
            <p class="card-text">Posicion: ${item.posicion}</p>
            <p class="card-text">Calificacion: ${item.promedio}</p>
            <p class="card-text">Equipo: ${item.equipo}</p>  
        </div>
        `;
    
        div.append(mensaje);
    });
}

export function agregarJugador(){

    let jugadores = JSON.parse(sessionStorage.getItem("jugadoresActual"));

    jugadores
        ? false
        : jugadores = [];

    let div = document.getElementById("funcionesDiv");
    div.innerHTML = "";
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

    fetch("../db/jugadoresDB.json")
        .then((response) => response.json())
            .then((data) => {
                data.forEach((item) => {
                    let mensaje2 = document.createElement("div");
                    mensaje2.className = "card text-bg-dark";
                    mensaje2.innerHTML = `
                    <img src="./fifa-card.png" class="card-img">
                    <div class="card-img-overlay">
                        <h5 class="card-title">${item.nombre}</h5>
                        <p class="card-text">Posicion: ${item.posicion}</p>
                        <p class="card-text">Calificacion: ${item.promedio}</p>
                        <p class="card-text">Equipo: ${item.equipo}</p>
                        <a class="btn btn-success" id="boton${item.nombre}">Agregar jugador</a>  
                    </div>
                    `;
                
                    div.append(mensaje2);

                    const botonAgregar = document.getElementById(`boton${item.nombre}`);

                    botonAgregar.addEventListener("click", () => {
                        if(jugadores.length >= 10){
                            Swal.fire({
                                title: `Solo se puede ingresar hasta 10 jugadores`
                            });
                            mostrarJugadores();
                        }else{
                            jugadores.push(new Jugador(item.nombre.toLowerCase(), item.posicion, parseFloat(item.promedio)));
                            sessionStorage.setItem("jugadoresActual", JSON.stringify(jugadores));
                            agregarJugador();
                        }
                    })
                });
            });

    if(jugadores.length >= 10){
        Swal.fire({
            title: `Solo se pueden ingresar hasta 10 jugadores`,
        })
        mostrarJugadores();
    }

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
}

export function quitarJugador(){
    let div = document.getElementById("funcionesDiv");
    div.innerHTML = "";
    div.className = "row container-fluid";

    let jugadores = JSON.parse(sessionStorage.getItem("jugadoresActual"));

    jugadores.forEach((item) => {
        let mensaje = document.createElement("div");
        mensaje.className = "card text-bg-dark";
        mensaje.innerHTML = `
        <img src="./fifa-card.png" class="card-img">
        <div class="card-img-overlay">
            <h5 class="card-title">${item.nombre}</h5>
            <p class="card-text">Posicion: ${item.posicion}</p>
            <p class="card-text">Calificacion: ${item.promedio}</p>
            <p class="card-text">Equipo: ${item.equipo}</p>
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
        mensaje.className = "card text-bg-dark";
        mensaje.innerHTML = `
        <img src="./fifa-card.png" class="card-img">
        <div class="card-img-overlay">
            <h5 class="card-title">${jugadorBuscado.nombre}</h5>
            <p class="card-text">Posicion: ${jugadorBuscado.posicion}</p>
            <p class="card-text">Calificacion: ${jugadorBuscado.promedio}</p>
            <p class="card-text">Equipo: ${jugadorBuscado.equipo}</p>
            <a class="btn btn-success" id="botonOk">OK</a>
        </div>
        `;
        div.append(mensaje);

        const botonOk = document.getElementById("botonOk");

        botonOk.addEventListener("click", () => {
            mostrarJugadores();
        })
    }
}