/*
AJAX Y FETCH: peticiones al servidor
*/

// console.log(fetch(`https://jsonplaceholder.typicode.com/posts`));//es una promesa!

// let listado = document.getElementById("listado");

// fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then(response => response.json())//en response tengo la info de la cabecera
//     .then((data) => {
//         data.forEach(publiacion => {
//             const li = document.createElement("li");
//             li.innerHTML = `
//                 <h2>${publiacion.title}</h2>
//                 <p>${publiacion.body}</p>
//             `;
//             listado.append(li);
//         });
//     })
//     .catch(error => console.log(error));//es buena practica recibir el error por las dudas

// let listado = document.getElementById("listado");

// fetch(`https://jsonplaceholder.typicode.com/posts`, {
//     method: "POST",
//     body: JSON.stringify({
//         title: "Publicacion coder",
//         body: "Nuestra primera publiacion en coder",
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then(response => response.json())
//     .then((data) => console.log(data))
//     .catch(error => console.log(error));

// fetch("./data.json")
//     .then(response => response.json())
//     .then((data) => {
//         data.forEach(element => {
//             let div = document.createElement("div");
//             div.innerHTML = `
//                 <h2>Id: ${element.id}</h2>
//                 <p>Nombre: ${element.nombre}</p>
//                 <b>$${element.precio}</b>
//             `;
//             document.body.append(div);
//         });
//     })
//     .catch(error => console.log(error));

const traerDatos = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const data = await response.json();
    
        let listado = document.getElementById("listado");
    
        data.forEach(publiacion => {
            const li = document.createElement("li");
            li.innerHTML = `
                <h2>${publiacion.title}</h2>
                <p>${publiacion.body}</p>
            `;
            listado.append(li);
        });
    } catch (error) {
        console.log(error);
    };
};

traerDatos();