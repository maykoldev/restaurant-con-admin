import { obtenerProductos, eliminarProducto } from "./api.js";

(function(){
const listado = document.querySelector('#listado-Productos');

document.addEventListener('DOMContentLoaded',mostrarProductos);
listado.addEventListener('click',confirmarEliminar);

async function mostrarProductos(){
    const productos = await obtenerProductos();

    console.log(productos);

    productos.forEach(i=>{
        const {nombre,precio,categoria,id} = i;
        const row = document.createElement('tr');

        row.innerHTML += `<td class="py-4 px-6 border-b border-gray-200">
        <p class="text-gray-700 font-medium text-lg font-bold text-sm leading-5">${nombre}</p>
    </td>`

    row.innerHTML += `<td class="py-4 px-6 border-b border-gray-200">
        <p class="text-gray-700 font-medium text-lg font-bold text-sm leading-5">$${precio}</p>
    </td>`

    row.innerHTML += `<td class="py-4 px-6 border-b border-gray-200">
        <p class="text-gray-700 font-medium text-lg font-bold text-sm leading-5">${categoria}</p>
    </td>`

    row.innerHTML += `<td class="py-4 px-6 border-b border-gray-200">
        <a href="editar-producto.html?id=${id}" class="text-teal-600 mr-5 hover:text-teal-900">Editar</a>
        <a href="#" data-producto="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
    </td>`

    listado.appendChild(row);
    })
}

async function confirmarEliminar(e){
    if(e.target.classList.contains('eliminar')){
        const productID = parseInt(e.target.dataset.producto);
        //console.log(productID);

        const confirmar = confirm('Quieres confirmar este producto');

        if(confirmar){
            await eliminarProducto(productID);
        }
    }
}})();