   const url = 'http://localhost:3000/cliente';

    export const atencion = async (cliente)=>{
        // console.log(cliente);
        try {
            await fetch(url,{
                method: 'POST',
                body:JSON.stringify(cliente),
                headers: {'Content-Type': 'application/json'}
            })
            localStorage.setItem('informacion', JSON.stringify(mesero));
            window.location.href = 'index.html';
        } catch (error) {
            console.log(error);
        }
    }