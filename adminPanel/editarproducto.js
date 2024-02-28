import { editarProducto, obtenerProducto } from "./api.js";
import { mostrarAlerta } from "./alerta.js";

const nombreInput = document.querySelector('#nombre');
const precioInput = document.querySelector('#precio');
const categoriaInput = document.querySelector('#categoria');
const idInput = document.querySelector('#id');

document.addEventListener('DOMContentLoaded', async()=>{
    //consultar en la url para extraer y guardar el id que enviamos en la ruta
    const parametroURL = new URLSearchParams(window.location.search);
    //console.log(window.location.search);
    const idProducto = parseInt(parametroURL.get('id'));
    //console.log(idProducto);

    const producto = await obtenerProducto(idProducto);
    //console.log(producto);
    mostrarProducto(producto);

    //hacer el registro de la actualizacion
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit',validarProducto);
})

function mostrarProducto(producto){
    //mostrar los datos del producto en la interfaz de editar
    const {nombre,precio,categoria,id} = producto;

    nombreInput.value = nombre;
    precioInput.value = precio;
    categoriaInput.value = categoria;
    idInput.value = id;
}

async function validarProducto(e){
    e.preventDefault();

    const producto = {
        nombre: nombreInput.value,
        precio : precioInput.value,
        categoria: categoriaInput.value,
        id:parseInt(idInput.value)
    }

    if(validacion(producto)){
        mostrarAlerta('Todos los campos son obligatorios');
        return;
    }else{
        await editarProducto(producto);
        window.location.href = 'index.html';
    }
}

function validacion (obj){
    return !Object.values(obj).every(i=> i !== '');
}