let clientes = [];

export function crearCliente(cliente){
    clientes.push(cliente);
    return "Cliente creado exitosamente!";
}

export function actualizaCliente(cliente){
    indice = clientes.indexOf(cliente.DNI);
    clientes[indice] = cliente;
}

export function eliminarCliente(dni) {
    indice = clientes.indexOf(dni);
    clientes.splice(indice);
}

export function leerCliente(dni) {
    return clientes.find(cliente => cliente.DNI=dni);
}

export function todosClientes() {
    return clientes;
}