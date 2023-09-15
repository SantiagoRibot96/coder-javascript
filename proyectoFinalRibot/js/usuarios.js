import { recuperarJugadores} from "./funciones.js"
import { guardarJugadores} from "./funciones.js"
import { mostrarJugadores } from "./funciones.js"

const loginPres = document.getElementById("login");
let usuariosStorage = JSON.parse(localStorage.getItem("usuarios"));
let jugadores = [];

loginPres.addEventListener("click", (e) => {
    if(loginPres.innerHTML.toLowerCase() === "login"){
        login();
    }else{
        logout();
    }
});

function login(){

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
                if(usuariosStorage === null){
                    usuariosStorage.push(result.value);
                    sessionStorage.setItem("usuarioActual", result.value);
                    localStorage.setItem("usuarios", JSON.stringify(usuariosStorage));
                    let jugadoresTemp = [];
                    sessionStorage.setItem("jugadoresActual", JSON.stringify(jugadoresTemp));
                    Swal.fire({
                        title: `Bienvenido ${result.value}. Eres el primero en entrar`,
                    });
                }else{
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
                                    Swal.fire(
                                    'Jugadores recuperados!',
                                    )
                                } else {
                                    jugadores = [];
                                    sessionStorage.setItem("jugadoresActual", JSON.stringify(jugadores));
                                }
                            })
                    }else{
                        usuariosStorage.push(result.value);
                        sessionStorage.setItem("usuarioActual", result.value);
                        localStorage.setItem("usuarios", JSON.stringify(usuariosStorage));
                        Swal.fire({
                            title: `Bienvenido ${result.value}. Es la primera vez que entras`,
                        })
                    }
                }
            loginPres.innerHTML = `Logout`;
            mostrarJugadores()
            }
        })
}

function logout(){
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
            sessionStorage.setItem("usuarioActual", "");
            jugadores = [];
            sessionStorage.setItem("jugadoresActual", JSON.stringify(jugadores));
            loginPres.innerHTML = `Login`;
            let div = document.getElementById("funciones");
            div.innerHTML = "";
        } else if (result.isDenied) {
            sessionStorage.setItem("usuarioActual", "");
            jugadores = [];
            sessionStorage.setItem("jugadoresActual", JSON.stringify(jugadores));
            loginPres.innerHTML = `Login`;
            let div = document.getElementById("funciones");
            div.innerHTML = "";
        }
    })
}