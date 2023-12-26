/*
-preEntrega2-

Programa que pide por prompt que ingreses jugadores de futbol y alguna de sus caracteristicas principales. Luego devuelve dos equipos random de futbol 5, balanceados.

Por dentro los jugadores se guardan en un array y se crean de forma dinamica al ser ingresados.
*/

/* 
-preEntrega3-

-Agregar funciones de local-storage:
    --guardar los jugadores precargados cuando se ejecuta por primera vez
    --recuperarlos si el usuario lo desea
    --si se crean nuevos jugadores guardarlos
-Agregar funciones de sesion-storage:
    --hacer un login. Dependiendo del usuario logeado son los jugadores. En la sessionStorage se guarda el ACTUAL usuario. En la localStorage se guardan todos los usuarios con sus jugadores asignados.
-Quitar todos los alert y promopt, reemplazarlos con DOM y eventos
-Modificar funcion ordenar para que sirva para cualquier array y no solo para este caso en especifico (sugerido)
*/

/* 
BUG REPORT:
    -Funcion agregarJugador: Cuando haces click en finalizar se agrega un jugador de más
        --sospecho que es un comportamiento no buscado del metodo formulario.reset(). Por eso se repite en otras funciones
    -Me econtre con el problema de que JSON no admite metodos y simplemente los ignora. Tuve que crear una funcion nueva para reemplazar al metodo de Jugador.asignar()

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
}

function asignar(item){
    if(Math.random()*10 > 5){
        item.equipo = "A";
    }else{
        item.equipo = "B";
    }
}

function buscarJugador(){

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

    let div = document.getElementById("funciones");
    div.innerHTML = "";

    jugadores.forEach((item) => {
        let mensaje = document.createElement("div");
        mensaje.innerHTML = `
        <h2>Nombre: ${item.nombre}</h2>
        <p>Posicion: ${item.posicion}</p>
        <b>Calificacion: ${item.promedio}</b>
        <b>Equipo: ${item.equipo}</b>
        `;
    
        div.append(mensaje);
    });

    let mensaje = document.createElement("p");
    mensaje.innerHTML = `
    <button id="botonOk">OK</button>
    `;
    div.append(mensaje);

    botonOk.onclick = () => {
        location.reload();
    };
}

function mostrarEquipos(){

    ordenar();

    let div = document.getElementById("funciones");
    div.innerHTML = `
    <div id = "contenedor1"></div>
    <div id = "contenedor2"></div>
    `;
    let contenedor1 = document.getElementById("contenedor1");
    let contenedor2 = document.getElementById("contenedor2");

    jugadores.forEach((item) => {
        let mensaje = document.createElement("span");
        mensaje.innerHTML = `
        <h2>Nombre: ${item.nombre}</h2>
        <p>Posicion: ${item.posicion}</p>
        <b>Calificacion: ${item.promedio}</b>
        <b>Equipo: ${item.equipo}</b>
        `;

        if(item.equipo === "A"){
            contenedor1.append(mensaje);
        }else{
            contenedor2.append(mensaje);
        }
    });

    let mensaje = document.createElement("p");
    mensaje.innerHTML = `
    <button id="botonOk">OK</button>
    `;
    div.append(mensaje);

    botonOk.onclick = () => {
        location.reload();
    };
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

            asignar(item);
            
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
    
        equipo = 0;
        cantidadDEF = 0;
        cantidadDEL = 0;
        cantidadCEN = 0;
    }

    let div = document.getElementById("funciones");
    div.innerHTML = "";
    let mensaje = document.createElement("p");
    mensaje.innerHTML = `
    <h2>Jugadores mezaclados con exito</h2>
    <button id="botonOk">OK</button>
    `;
    div.append(mensaje);

    botonOk.onclick = () => {
        sessionStorage.setItem("jugadoresActual", JSON.stringify(jugadores));
        location.reload();
    };
}

function agregarJugador(){

    let div = document.getElementById("funciones");
    div.innerHTML = "";
    let mensaje = document.createElement("p");
    mensaje.innerHTML = `
    <h2 id="funcionesH2">Se pueden añadir hasta 10 jugadores. La cantidad actual de jugadores es: ${jugadores.length}</h2>
    <form id="formularioJugador">
        <input type="text" placeholder="Nombre">
        <select id="opcionesJugador">
            <option selected>Elija una opcion...</option>
            <option value="DEF">DEF</option>
            <option value="CEN">CEN</option>
            <option value="DEL">DEL</option>
        </select>
        <input type="text" placeholder="Calificacion">
        <input type="submit">
        <button id="botonFin">Finalizar</button>
    </form>
    `;
    div.append(mensaje);

    if(jugadores.length >= 10){
        mensaje.innerHTML = `
        <h2>Se pueden añadir hasta 10 jugadores.La cantidad actual de jugadores es: ${jugadores.length}</h2>
        <h3>Se ha alcanzado la cantidad maxima de jugadores</h3>
        <button id="botonOk">OK</button>
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
        location.reload();
    };
}

function eliminarJugador(){

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

function crearJugadoresPredeterminados(cantidad){

    let div = document.getElementById("funciones");
    div.innerHTML = "";
    let mensaje = document.createElement("p");

    if(jugadores.length >= 10){
        mensaje.innerHTML = `
        <h2>Se ha alcanzado la cantidad maxima de jugadores</h2>
        <button id="botonOk">OK</button>
        `;
        div.append(mensaje);

        let botonOk = document.getElementById("botonOk");

        botonOk.onclick = () => {
            location.reload();
        };

    }

    let jugadoresPredeterminados = [];

    jugadoresPredeterminados.push(new Jugador("ronaldo", "DEL", 9));
    jugadoresPredeterminados.push(new Jugador("riquelme", "CEN", 8));
    jugadoresPredeterminados.push(new Jugador("messi", "DEL", 10));
    jugadoresPredeterminados.push(new Jugador("puyol", "DEF", 7));
    jugadoresPredeterminados.push(new Jugador("ramos", "DEF", 9));
    jugadoresPredeterminados.push(new Jugador("ribot", "CEN", 7));
    jugadoresPredeterminados.push(new Jugador("pepe", "DEL", 4));
    jugadoresPredeterminados.push(new Jugador("carlos", "DEF", 5));
    jugadoresPredeterminados.push(new Jugador("juan", "CEN", 2));
    jugadoresPredeterminados.push(new Jugador("nacho", "DEL", 6));
    jugadoresPredeterminados.push(new Jugador("loco", "DEF", 4));

    console.log(JSON.stringify(jugadoresPredeterminados));

    mensaje.innerHTML = `
    <h2>${cantidad} de jugadores creados</h2>
    <button id="botonOk">OK</button>
    `;
    div.append(mensaje);

    let botonOk = document.getElementById("botonOk");

    while(cantidad > 0){
        jugadores.push(jugadoresPredeterminados[cantidad]);
        cantidad--;
    }

    botonOk.onclick = () => {
        sessionStorage.setItem("jugadoresActual", JSON.stringify(jugadores));
        location.reload();
    };
}

/* 
Funciones correspondientes a la preEntrega3 propiamente dicho
*/

function guardarJugadores(){
    localStorage.setItem(usuarioActual, JSON.stringify(jugadores));
}

function recuperarJugadores(){

    let div = document.getElementById("recupero");
    let mensaje = document.createElement("p");
    mensaje.innerHTML = `
    <h2>Desea recuperar los jugadores de una sesion pasada?</h2>
    <button id="botonSi">SI</button>
    <button id="botonNo">NO</button>
    `;
    div.append(mensaje);

    let botonSi = document.getElementById("botonSi");
    let botonNo = document.getElementById("botonNo");

    botonSi.onclick = () => {
        jugadoresStorage = localStorage.getItem(usuarioActual);

        if(jugadoresStorage != null){
            jugadores = JSON.parse(jugadoresStorage);
            sessionStorage.setItem("jugadoresActual", JSON.stringify(jugadores));
            mensaje.innerHTML = `
            <h2>Jugadores cargados <button id="botonOk">OK</button></h2>
            `;
            div.append(mensaje);
    
            let botonOk = document.getElementById("botonOk");
    
            botonOk.onclick = () => {
                location.reload(true);
            };
        }else{
            mensaje.innerHTML = `
            <h2>No hay jugadores de sesiones anteriores <button id="botonOk">OK</button></h2>
            `;
            div.append(mensaje);

            jugadores = [];
            sessionStorage.setItem("jugadoresActual", JSON.stringify(jugadores));
            let botonOk = document.getElementById("botonOk");
    
            botonOk.onclick = () => {
                location.reload(true);
            };
        }
    };
    botonNo.onclick = () => {
        mensaje.innerHTML = `
        <h2>No se han recuperado jugadores de sesiones anteriores <button id="botonOk">OK</button></h2>
        `;
        div.append(mensaje);

        jugadores = [];
        sessionStorage.setItem("jugadoresActual", JSON.stringify(jugadores));
        let botonOk = document.getElementById("botonOk");

        botonOk.onclick = () => {
            location.reload(true);
        };
    };
}

function login(){
    let usuariosStorage = localStorage.getItem("usuarios");

    let div = document.getElementById("login");
    div.innerHTML = "";
    let mensaje = document.createElement("p");
    mensaje.innerHTML = `
    <h2>Ingrese su usuario</h2>
    <form id="formularioUsuario">
        <input type="text">
        <input type="submit">
    </form>
    `;
    div.append(mensaje);

    let formularioUsuario = document.getElementById("formularioUsuario");

    formularioUsuario.addEventListener("submit", (e) => {
        e.preventDefault();

        let inputs = e.target.children;

        if(inputs[0].value != null){
            usuarioActual = inputs[0].value;
        }

        if(usuariosStorage === null){
            mensaje.innerHTML = `
            <h2>Eres el primer usuario! Bienvenido ${usuarioActual} <button id="botonOk">OK</button></h2>
            `;
            div.append(mensaje);

            let botonOk = document.getElementById("botonOk");

            botonOk.onclick = () => {
                usuarios.push(usuarioActual);
                sessionStorage.setItem("usuarioActual", usuarioActual);
                localStorage.setItem("usuarios", JSON.stringify(usuarios));
                loggedIn = true;
                sessionStorage.setItem("loggedIn", JSON.stringify(loggedIn));
                jugadoresTemp = [];
                sessionStorage.setItem("jugadoresActual", JSON.stringify(jugadoresTemp));
                location.reload(true);
            };
        }
        else{
            usuarios = JSON.parse(usuariosStorage);
            let cont = 0;
    
            while(usuarios[cont] != usuarioActual && cont < usuarios.length){
                cont++;
            }
        
            if(usuarios[cont] === usuarioActual){
                mensaje.innerHTML = `
                <h2>Bienvenido nuevamente ${usuarioActual}</h2>
                <div id="recupero"></div>
                `;
                div.append(mensaje);
                sessionStorage.setItem("usuarioActual", usuarioActual);
                loggedIn = true;
                sessionStorage.setItem("loggedIn", JSON.stringify(loggedIn));
                recuperarJugadores();
            }else{
                mensaje.innerHTML = `
                <h2>Bienvenido por primera vez ${usuarioActual} <button id="botonOk">OK</button></h2>
                `;
                div.append(mensaje);
    
                let botonOk = document.getElementById("botonOk");
    
                botonOk.onclick = () => {
                    usuarios.push(usuarioActual);
                    sessionStorage.setItem("usuarioActual", usuarioActual);
                    localStorage.setItem("usuarios", JSON.stringify(usuarios));
                    loggedIn = true;
                    sessionStorage.setItem("loggedIn", JSON.stringify(loggedIn));
                    location.reload(true);
                };
            }
        }
    });
}




/* 
///////////////////////////////////////////////////////////////////////////////////
Inicio del programa
///////////////////////////////////////////////////////////////////////////////////
*/





let jugadores = JSON.parse(sessionStorage.getItem("jugadoresActual"));
let usuarios = [];
let usuarioActual = sessionStorage.getItem("usuarioActual");
let loggedIn = JSON.parse(sessionStorage.getItem("loggedIn"));

if (loggedIn){
    let div = document.getElementById("menu");
    let mensaje = document.createElement("P");
    mensaje.innerHTML = `
    <h2>Cantidad de jugadores: ${jugadores.length}</h2>
    <h3>Que desea hacer?</h3>
    <select id="opcionesMenu">
        <option selected>Elija una opcion...</option>
        <option value="1">Agregar un jugador nuevo</option>
        <option value="2">Eliminar un jugador de la plantilla</option>
        <option value="3">Buscar un jugador en la plantilla</option>
        <option value="4">Hallar un equipo al azar con la plantilla actual</option>
        <option value="5">Mostrar los jugadores de la plantilla</option>
        <option value="6">Mostrar los dos equipos generados</option>
        <option value="7">Rellenar con jugadores predeterminados</option>
        <option value="8">Cerrar sesion</option>
    </select>
    `;
    div.append(mensaje);
    
    let opcionesMenu = document.getElementById("opcionesMenu");
    
    opcionesMenu.addEventListener("click", () => {
    
        opcionesMenu.addEventListener("change", () => {
    
            switch (opcionesMenu.value) {
                case "1":
                    agregarJugador();
                    break;
            
                case "2":
                    eliminarJugador();
                    break;
            
                case "3":
                    buscarJugador();
                    break;
            
                case "4":
                    hallarEquipo();
                    break;
            
                case "5":
                    mostrarJugadores();
                    break;
            
                case "6":
                    mostrarEquipos();
                    break;
        
                case "7":
                    crearJugadoresPredeterminados(10-jugadores.length);
                    break;
        
                case "8":
                    mensaje.innerHTML = `
                    Desea guardar antes de salir?
                    <button id="botonSi">SI</button>
                    <button id="botonNo">NO</button>
                    `;
                    div.append(mensaje);
                
                    let botonSi = document.getElementById("botonSi");
                    let botonNo = document.getElementById("botonNo");
                    botonSi.onclick = () => {
                        guardarJugadores();
                        div.innerHTML = "";
                        loggedIn = false;
                        sessionStorage.setItem("loggedIn", JSON.stringify(loggedIn));
                        usuarioActual = "";
                        sessionStorage.setItem("usuarioActual", usuarioActual);
                        jugadores = [];
                        sessionStorage.setItem("jugadoresActual", JSON.stringify(jugadores));
                        location.reload();
                    };
                    botonNo.onclick = () => {
                        div.innerHTML = "";
                        loggedIn = false;
                        sessionStorage.setItem("loggedIn", JSON.stringify(loggedIn));
                        usuarioActual = "";
                        sessionStorage.setItem("usuarioActual", usuarioActual);
                        jugadores = [];
                        sessionStorage.setItem("jugadoresActual", JSON.stringify(jugadores));
                        location.reload();
                    };
                    break;
            
                default:
        
                    break;
            }
        });
    });
}else{
    login();
}