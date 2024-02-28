import { nuevoProducto } from "./api.js";
import { mostrarAlerta } from "./alerta.js";

const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit',validarProducto);

async function validarProducto(e){
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const precio = document.querySelector('#precio').value;
    const categoria = document.querySelector('#categoria').value;

    const producto = {
        nombre,
        precio,
        categoria
    }

    if(validacion(producto)){
        //console.log('todos los campos son obligatorios');
        mostrarAlerta('todos los campos son obligatorios')
        return;
    }else{
        await nuevoProducto(producto);
        window.location.href = 'index.html';
    }
}

function validacion (obj){
    return !Object.values(obj).every(i=> i !== '');
}