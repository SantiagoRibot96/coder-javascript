// let valorProducto = parseFloat(prompt("Ingrese el valor del producto"));
// if(!isNaN(valorProducto) && valorProducto > 0)
// {
//     /* Quire decir que el valor ingresado es un numero mayor que cero*/

//     let cantidadCuotas = parseInt(prompt("Ingrese la cantidad de cuotas deseadas"));
//     if(!isNaN(cantidadCuotas) && cantidadCuotas > 0){
//         /* Quire decir que el valor ingresado es un numero mayor que cero*/

//         let recargo = parseFloat(prompt("Ingrese el recargo total que tienen las cuotas en %"));
//         if(!isNaN(recargo)){
//             /* Quire decir que el valor ingresado es un numero*/

//             let valorProductoConRecargo = valorProducto*(1+recargo/100);
//             let valorDeCuota = valorProductoConRecargo/cantidadCuotas;

//             alert(`El valor total del producto financiado es de $${valorProductoConRecargo.toFixed(2)} a pagar en ${cantidadCuotas} de $${valorDeCuota.toFixed(3)}`);
//         }else{

//             alert("No es un numero");
//         }
//     }
//     else{

//         alert("No es un numero mayor a 0");
//     }
// }else{

//     alert("No es un numero mayor a 0");
// }

function validar(valor){
    if(!isNaN(valor) && valor > 0){
        return true;
    }else{
        alert("No es un numero mayor a 0");
        return false;
    }
}

function obtener(pregunta){
    let variable;

    while(true && !terminoPrograma){

        variable = prompt(pregunta);
    
        if(variable.toLowerCase() === "quit"){
            terminoPrograma = true;
            break;
        }
    
        variable = parseFloat(variable);
    
        if(validar(variable)){
            break;
        }
    }

    return(variable);
}

let valorProducto;
let cantidadCuotas;
let recargo;
let terminoPrograma = false; //es un flag global al que necesito que accedan las funciones

valorProducto = obtener("Bienvenido al programa de cuotas. Ingrese quit para terminar el programa\n\nIngrese el valor del producto");
cantidadCuotas = obtener("Ingrese la cantidad de cuotas");
recargo = obtener("Ingrese el recargo");

if(terminoPrograma){
    alert("Refrescar la pagina en caso de querer hacer otra operacion");
}else{
    let valorProductoConRecargo = valorProducto*(1+recargo/100);
    let valorDeCuota = valorProductoConRecargo/cantidadCuotas;
    
    alert(`El valor total del producto financiado es de $${valorProductoConRecargo.toFixed(2)} a pagar en ${cantidadCuotas} cuotas de $${valorDeCuota.toFixed(2)}`);
    alert("Refrescar la pagina en caso de querer hacer otra operacion");
}