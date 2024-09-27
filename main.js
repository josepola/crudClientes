import { crearCliente, todosClientes } from "./clientesManager.js";


let clientesArray = [];

function cargaClientes() {
    clientesArray = todosClientes();
    // crear una tabla para mostrarlos
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    clientesArray.forEach(cliente => {
        let tr = document.createElement('tr');
        let tdNombre = document.createElement('td');
        let tdDNI = document.createElement('td');
        let tdMovil = document.createElement('td');
        let tdDireccion = document.createElement('td');
        tdNombre.innerText = cliente.nombre;
        tdDNI.innerText = cliente.DNI;
        tdMovil.innerText = cliente.movil;
        tdDireccion.innerText = cliente.direccion;
        tr.appendChild(tdNombre);
        tr.appendChild(tdDNI);
        tr.appendChild(tdMovil);
        tr.appendChild(tdDireccion);

        tbody.append(tr);
    })
}

function nuevoCliente() {
    event.preventDefault();
    const cliente = {
        nombre: document.querySelector('#nombre').value,
        DNI: document.querySelector('#DNI').value,
        movil: document.querySelector('#movil').value,
        direccion: document.querySelector('#direccion').value
    };
    const mensaje = crearCliente(cliente);
    document.querySelector('#mensaje').innerHTML = mensaje;
    document.forms[0].reset();
    // Pedir la lista de usuarios y mostrarla
    cargaClientes();
}


window.onload = cargaClientes;
window.nuevoCliente = nuevoCliente;