let valorProducto = parseFloat(prompt("Ingrese el valor del producto"));

if(!isNaN(valorProducto) && valorProducto > 0)
{
    /* Quire decir que el valor ingresado es un numero mayor que cero*/

    let cantidadCuotas = parseInt(prompt("Ingrese la cantidad de cuotas deseadas"));
    if(!isNaN(cantidadCuotas) && cantidadCuotas > 0){
        /* Quire decir que el valor ingresado es un numero mayor que cero*/

        let recargo = parseFloat(prompt("Ingrese el recargo total que tienen las cuotas en %"));
        if(!isNaN(recargo)){
            /* Quire decir que el valor ingresado es un numero*/

            let valorProductoConRecargo = valorProducto*(1+recargo/100);
            let valorDeCuota = valorProductoConRecargo/cantidadCuotas;

            alert(`El valor total del producto financiado es de $${valorProductoConRecargo.toFixed(2)} a pagar en ${cantidadCuotas} de $${valorDeCuota.toFixed(3)}`);
        }else{

            alert("No es un numero");
        }
    }
    else{

        alert("No es un numero mayor a 0");
    }
}else{

    alert("No es un numero mayor a 0");
}