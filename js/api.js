    const url = 'http://localhost:3000/mesero';

    export const mesero = async (mesero)=>{
        // console.log(mesero);
        try {
            await fetch(url,{
                method: 'POST',
                body:JSON.stringify(mesero),
                headers: {'Content-Type': 'application/json'}
            })
            localStorage.setItem('informacion', JSON.stringify(mesero));
           window.location.href = 'index.html';
        } catch (error) {
            console.log(error);
        }
    }

    //     await fetch(url,{method: 'POST', 
    //     body: JSON.stringify(mesero),
    //     headers: {'Content-Type': 'application/json'}
    // })
    // .catch(function(err) {console.log(err);})
    // window.location.href = 'menu.json';