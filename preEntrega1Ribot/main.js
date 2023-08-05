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

let valorProducto;
let cantidadCuotas;
let recargo;
let terminoPrograma = false;

while(true && !terminoPrograma){

    valorProducto = prompt("Ingrese el valor del producto");

    if(valorProducto.toLowerCase() === "quit"){
        terminoPrograma = true;
        break;
    }

    valorProducto = parseFloat(valorProducto);

    if(validar(valorProducto)){
        break;
    }
}

while(true && !terminoPrograma){

    cantidadCuotas = prompt("Ingrese la cantidad de cuotas");

    if(cantidadCuotas.toLowerCase() === "quit"){
        terminoPrograma = true;
        break;
    }

    cantidadCuotas = parseFloat(cantidadCuotas);

    if(validar(cantidadCuotas)){
        break;
    }
}

while(true && !terminoPrograma){

    recargo = prompt("Ingrese el recargo");

    if(recargo.toLowerCase() === "quit"){
        terminoPrograma = true;
        break;
    }

    recargo = parseFloat(recargo);

    if(validar(recargo)){
        break;
    }
}

if(terminoPrograma){
    alert("Refrescar la pagina en caso de querer hacer otra operacion");
}else{
    let valorProductoConRecargo = valorProducto*(1+recargo/100);
    let valorDeCuota = valorProductoConRecargo/cantidadCuotas;
    
    alert(`El valor total del producto financiado es de $${valorProductoConRecargo.toFixed(2)} a pagar en ${cantidadCuotas} de $${valorDeCuota.toFixed(2)}`);
    alert("Refrescar la pagina en caso de querer hacer otra operacion");
}
