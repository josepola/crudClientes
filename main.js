import { crearCliente } from "./clientesManager.js";


let clientesArray = [];

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
    document.forms[0].reset;
    // Pedir la lista de usuarios y mostrarla
}



window.nuevoCliente = nuevoCliente;