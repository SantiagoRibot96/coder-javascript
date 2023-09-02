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
///////////////////////////////////////////////////////////////////////////////////
Declaracion de funciones
///////////////////////////////////////////////////////////////////////////////////
*/





class Jugador{
    constructor(usuario, nombre, posicion, promedio){
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
    nombreIngresado = prompt("Ingrese el nombre del jugador que desea consultar");

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

    if(jugadores.length >= 10){
        alert("Cantidad maxima de jugadores ingresados");
        return;
    }

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

        let indice = 0;
    
        for(const item of jugadores){
            if(item.nombre != nombreJugador){
                indice++;
            }else{
                break;
            }
        }

        if(indice === jugadores.length){
            alert(`El jugador ${nombreJugador} no se encuentra en la plantilla`);
        }else{
            jugadores.splice(indice, 1);
            alert(`El jugador ${nombreJugador} fue eliminado de la plantilla`);
        }
}

function crearJugadoresPredeterminados(cantidad){

    if(jugadores.length >= 10){
        alert("Cantidad maxima de jugadores ingresados");
        return;
    }

    let jugadoresPredeterminados = [];

    jugadoresPredeterminados.push(new Jugador(usuarioActual, "Ronaldo", "DEL", 9));
    jugadoresPredeterminados.push(new Jugador(usuarioActual, "Riquelme", "CEN", 8));
    jugadoresPredeterminados.push(new Jugador(usuarioActual, "Messi", "DEL", 10));
    jugadoresPredeterminados.push(new Jugador(usuarioActual, "Puyol", "DEF", 7));
    jugadoresPredeterminados.push(new Jugador(usuarioActual, "Ramos", "DEF", 9));
    jugadoresPredeterminados.push(new Jugador(usuarioActual, "Ribot", "CEN", 7));
    jugadoresPredeterminados.push(new Jugador(usuarioActual, "Pepe", "DEL", 4));
    jugadoresPredeterminados.push(new Jugador(usuarioActual, "Carlos", "DEF", 5));
    jugadoresPredeterminados.push(new Jugador(usuarioActual, "Juan", "CEN", 2));
    jugadoresPredeterminados.push(new Jugador(usuarioActual, "Nacho", "DEL", 6));
    jugadoresPredeterminados.push(new Jugador(usuarioActual, "Loco", "DEF", 4));

    while(cantidad > 0){
        jugadores.push(jugadoresPredeterminados[cantidad]);
        cantidad--;
    }
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
            mensaje.innerHTML = `
            <h2>Jugadores cargados</h2>
            `;
            div.append(mensaje);
        }else{
            mensaje.innerHTML = `
            <h2>No hay jugadores de sesiones anteriores</h2>
            `;
            div.append(mensaje);
        }
    };
    botonNo.onclick = () => {
        mensaje.innerHTML = `
        <h2>No se han recuperado jugadores de sesiones anteriores</h2>
        `;
        div.append(mensaje);
        div.remove();
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
            <h2>Eres el primer usuario! Bienvenido ${usuarioActual}</h2>
            `;
            div.append(mensaje);
            usuarios.push(usuarioActual);
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
                recuperarJugadores();
            }else{
                mensaje.innerHTML = `
                <h2>Bienvenido por primera vez ${usuarioActual}</h2>
                `;
                div.append(mensaje);
                usuarios.push(usuarioActual);
            }
        }
    
        sessionStorage.setItem("usuarioActual", usuarioActual);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        loggedIn = true;
    });
}




/* 
///////////////////////////////////////////////////////////////////////////////////
Inicio del programa
///////////////////////////////////////////////////////////////////////////////////
*/





let jugadores = [];
let usuarios = [];
let usuarioActual;
let loggedIn = false;

login();

let div = document.getElementById("menu");
let mensaje = document.createElement("P");
mensaje.innerHTML = `
<h2>Cantidad de jugadores: ${jugadores.length}</h2>
<h3>Que desea hacer?</h3>
<select id="opcionesMenu">
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
                let nombreJugadorEliminado = prompt("Ingrese el nombre del jugador a eliminar. El sistema reconoce las mayusculas!");
                eliminarJugador(nombreJugadorEliminado);
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
                if(prompt("Desea guardar su progreso? S/N").toLowerCase() === "s"){
                    guardarJugadores();
                }

                login();
                break;
        
            default:
    
                break;
        }
    });
});