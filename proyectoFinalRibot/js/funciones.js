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

    if(jugadores.length >= 10){
        mensaje.innerHTML = `
        <h2>Se pueden añadir hasta 10 jugadores.La cantidad actual de jugadores es: ${jugadores.length}</h2>
        <h3>Se ha alcanzado la cantidad maxima de jugadores</h3>
        <button id="botonOk" class="btn btn-primary">OK</button>
        `;
        div.append(mensaje);

        let botonOk = document.getElementById("botonOk");

        botonOk.onclick = () => {
            location.reload(true);
        };
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
            mensaje.innerHTML = `
            <h3>Se ha alcanzado la cantidad maxima de jugadores</h3>
            <button id="botonOk">OK</button>
            `;
            div.append(mensaje);
    
            let botonOk = document.getElementById("botonOk");
    
            botonOk.onclick = () => {
                location.reload(true);
            };
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

    let div = document.getElementById("funciones");
    div.innerHTML = "";
    let mensaje = document.createElement("p");
    mensaje.innerHTML = `
    <h2 id="funcionesH2"></h2>
    <form id="formularioJugador">
        <input type="text" placeholder="Nombre del jugador">
        <input type="submit">
        <button id="botonFin">Finalizar</button>
    </form>
    `;
    div.append(mensaje);

    let formularioJugador = document.getElementById("formularioJugador");
    let botonFin = document.getElementById("botonFin");
    let funcionesH2 = document.getElementById("funcionesH2");
    let indice = 0;

    formularioJugador.addEventListener("submit", (e) => {
        e.preventDefault();

        let inputs = e.target.children;

        for(const item of jugadores){
            if(item.nombre != inputs[0].value.toLowerCase()){
                indice++;
            }else{
                break;
            }
        }
    
        if(indice === jugadores.length){
            funcionesH2.innerHTML = `El jugador ${inputs[0].value} no se encuentra en la plantilla`;
        }else{
            jugadores.splice(indice, 1);
            funcionesH2.innerHTML = `El jugador ${inputs[0].value} fue eliminado`;
        }

        sessionStorage.setItem("jugadoresActual", JSON.stringify(jugadores));
        formularioJugador.reset();
    });

    botonFin.onclick = () => {
        location.reload();
    };
}

export function buscarJugador(jugador){

    let div = document.getElementById("funciones");
    div.innerHTML = "";
    let mensaje = document.createElement("p");
    mensaje.innerHTML = `
    <form id="formularioJugador">
        <input type="text" placeholder="Nombre del jugador">
        <input type="submit">
        <button id="botonFin">Finalizar</button>
    </form>
    <P id="funcionesP"></P>
    `;
    div.append(mensaje);

    let formularioJugador = document.getElementById("formularioJugador");
    let botonFin = document.getElementById("botonFin");
    let funcionesP = document.getElementById("funcionesP");
    let jugadorBuscado;

    formularioJugador.addEventListener("submit", (e) => {
        e.preventDefault();

        let inputs = e.target.children;
        jugadorBuscado = "";

        for(const item of jugadores){
            if(item.nombre === inputs[0].value.toLowerCase()){
                jugadorBuscado = item;
            }
        }
    
        if(jugadorBuscado){
            funcionesP.innerHTML = `
            El jugador tiene las siguientes caracteristicas:
            <h2>Nombre: ${jugadorBuscado.nombre}</h2>
            <p>Posicion: ${jugadorBuscado.posicion}</p>
            <b>Calificacion: ${jugadorBuscado.promedio}</b>
            <b>Equipo: ${jugadorBuscado.equipo}</b>
            `;
        }else{
            funcionesP.innerHTML = `
            Jugador no encontrado
            `;
        }
        formularioJugador.reset();
    });

    botonFin.onclick = () => {
        location.reload();
    }; 
}