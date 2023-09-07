/* 
librerias
    -sweetalert2
    -toastify
    -luxon
*/

// let boton = document.getElementById("boton");

// boton.addEventListener("click", () => {
//     Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Something went wrong!',
//         footer: '<a href="">Why do I have this issue?</a>'
//     });
// });

// let boton = document.getElementById("boton");

// boton.addEventListener("click", () => {
//     Swal.fire({
//         position: 'top-end',
//         icon: 'success',
//         title: 'Your work has been saved',
//         showConfirmButton: false,
//         timer: 1500
//     });
// });

// let boton = document.getElementById("boton");

// boton.addEventListener("click", () => {
//     Toastify({
//         text: "This is a toast",
//         className: "info",
//         style: {
//         background: "linear-gradient(to right, #00b09b, #96c93d)",
//         }
//     }).showToast();
// });

// let boton = document.getElementById("boton");

// boton.addEventListener("click", () => {
//     Toastify({
//         text: "This is a toast",
//         duration: 3000,
//         destination: "https://github.com/apvarun/toastify-js",
//         newWindow: true,
//         close: true,
//         gravity: "top", // `top` or `bottom`
//         position: "left", // `left`, `center` or `right`
//         stopOnFocus: true, // Prevents dismissing of toast on hover
//         style: {
//         background: "linear-gradient(to right, #00b09b, #96c93d)",
//         },
//         onClick: function(){} // Callback after click
//     }).showToast();
// });

const DateTime = luxon.DateTime;

const hoy = DateTime.local(2023, 8, 26);
console.log(hoy.c);