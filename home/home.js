//* SELECTORES:
const formL = document.querySelector('#form-login');
const formC = document.querySelector('#form-create');
const inputL = document.querySelector('#login-input');
const inputC = document.querySelector('#create-input');
const notificacion = document.querySelector('.notification');

//* EVENTOS:

formC.addEventListener('submit', async e=>{ //? <--- operacion asincrona
    e.preventDefault();

    const respuesta = await fetch('http://localhost:3000/usuarios', {
        method:'GET'
    });

    const meseros = await respuesta.json();

    //buscar si ya existe un usuario con el mismo nombre:
    const mesero = meseros.find(i=>i.nombre === inputC.value);
   

    //validaciones:
    if(!inputC.value){
        //el campo esta vacio
        console.log('El usuario no puede estar vacio')
        notificacion.innerHTML = 'El usuario no puede estar vacio';
        notificacion.classList.add('show-notification');

        setTimeout(()=>{
            notificacion.classList.remove('show-notification');//<--esta clase le hace display a la notificacion
        },5000);
    }else if(mesero){
        //ya existe el usuario
    
        notificacion.innerHTML = 'El usuario ya existe';
        notificacion.classList.add('show-notification');

        setTimeout(()=>{
            notificacion.classList.remove('show-notification');
        },5000);
    }else{
        //Crear el usuario
        await fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({nombre:inputC.value})//<--solo puede recibir strings
        })


        notificacion.innerHTML = `El empleado ${inputC.value} ha sido creado`;
        notificacion.classList.add('show-notification');

        setTimeout(()=>{
            notificacion.classList.remove('show-notification');
        },5000);

        inputC.value = '';
    }
});


formL.addEventListener('submit', async e=>{
    e.preventDefault();

    const respuesta = await fetch('http://localhost:3000/usuarios', {
        method: 'GET'
    });

    const meseros = await respuesta.json();

    const mesero = meseros.find(i=>i.nombre === inputL.value);

    //validar:
    if(!mesero){
        //si no existe
        notificacion.innerHTML = 'El usuario no existe';
        notificacion.classList.add('show-notification');
        setTimeout(()=>{
            notificacion.classList.remove('show-notification');
        }, 5000);
    }else{
        //si existe, debe tomar el valor y guardarlo en el localstorage
        localStorage.setItem('user', JSON.stringify(mesero))
        window.location.href = '../index.html';
    }

})