import { recuperarJugadores} from "./funciones.js"
import { guardarJugadores} from "./funciones.js"
import { mostrarJugadores } from "./funciones.js"

const loginPres = document.getElementById("login");
let usuariosStorage = JSON.parse(localStorage.getItem("usuarios"));

loginPres.addEventListener("click", (e) => {
    if(loginPres.innerHTML.toLowerCase() === "login"){
        login();
    }else{
        logout();
    }
});

function login(){

    let jugadores = [];

    usuariosStorage
        ? false
        : usuariosStorage = [];

    Swal.fire({
        title: 'Ingrese su usuario',
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Ingresar',
        allowOutsideClick: () => !Swal.isLoading()
        })
        .then((result) => {
            if (result.isConfirmed && result.value){
                    const usuarioActual = usuariosStorage.find((usuario) => usuario === result.value);

                    if(usuarioActual){
                        sessionStorage.setItem("usuarioActual", result.value);
                        Swal.fire({
                            title: 'Deseas recuperar los jugadores de una sesion pasada?',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Si!',
                            cancelButtonText: `Cancelar`
                            })
                            .then((result) => {
                                if (result.isConfirmed) {
                                    recuperarJugadores(jugadores);
                                } else {
                                    jugadores = [];
                                    sessionStorage.setItem("jugadoresActual", JSON.stringify(jugadores));
                                }
                                mostrarJugadores();
                            })
                    }else{
                        usuariosStorage.push(result.value);
                        sessionStorage.setItem("usuarioActual", result.value);
                        localStorage.setItem("usuarios", JSON.stringify(usuariosStorage));
                        let jugadoresTemp = [];
                        sessionStorage.setItem("jugadoresActual", JSON.stringify(jugadoresTemp));
                        Swal.fire({
                            title: `Bienvenido ${result.value}. Es la primera vez que entras`,
                        })
                        mostrarJugadores();
                    }
            loginPres.innerHTML = `Logout`;
            }
        })
}

function logout(){
    
    let jugadores = JSON.parse(sessionStorage.getItem("jugadoresActual"));

    Swal.fire({
        title: 'Desea guardar antes de salir?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `No guardar`,
        cancelButtonText: `Cancelar`
    })
    .then((result) => {
        if (result.isConfirmed) {
            guardarJugadores(jugadores);
            loginPres.innerHTML = `Login`;
            let div = document.getElementById("funcionesDiv");
            div.innerHTML = "";
        } else if (result.isDenied) {
            sessionStorage.setItem("usuarioActual", "");
            jugadores = [];
            sessionStorage.setItem("jugadoresActual", JSON.stringify(jugadores));
            loginPres.innerHTML = `Login`;
            let div = document.getElementById("funcionesDiv");
            div.innerHTML = "";
        }
    })
}