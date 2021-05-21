const d = document,
    $table = d.querySelector('.crud-table'),
    $form = d.querySelector('.crud-form'),
    $title = d.querySelector('.crud-title'),
    //@ts-ignore
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();

    //@ts-ignore
    const getAll = async () => {
        try {
            let res = await fetch('http://localhost:5001/santos'),
               data = await res.json();
                
            if(!res.ok) throw {status: res.status, statusText: res.statusText}

            data.forEach(el => {
                $template.querySelector('.name').textContent = el.nombre;
                $template.querySelector('.constellation').textContent = el.constelacion;
                $template.querySelector('.edit').dataset.id = el.id;
                $template.querySelector('.edit').dataset.name = el.nombre;
                $template.querySelector('.edit').dataset.constellation = el.constelacion;
                $template.querySelector('.delete').dataset.id = el.id;
                
                let $clone = d.importNode($template, true);
                $fragment.appendChild($clone);
            });

            $table.querySelector('tbody').appendChild($fragment)

        } catch (err) {
            let message = err.statusText || 'Ocurrio un error';
            $table.insertAdjacentHTML('afterend',`<p><b>Error: ${err.status}: ${message}</b></p>`)
        }
    }

    /*=== Funcion para inciar el HTMO cargado ===*/
    d.addEventListener('DOMContentLoaded', getAll);

    //@ts-ignore
    d.addEventListener('submit', async (e) => {
        if(e.target === $form){
            e.preventDefault();
            //@ts-ignore
            if(!e.target.id.value){
                //Creamos - POST
                try {
                    let options = {
                        method: "POST",
                        headers: {
                            "Content-type" : "application/json; charset=utf-8"
                        },
                        body: JSON.stringify({
                            //@ts-ignore
                            nombre:e.target.nombre.value,
                            //@ts-ignore
                            constelacion:e.target.constelacion.value
                        })
                    }

                    let res = await fetch(`http://localhost:5001/santos`, options),
                        json = await res.json();

                    if(!res.ok) throw {status: res.status, statusText: res.statusText}
                    
                    location.reload();

                } catch (err) {
                    let message = err.statusText || "Ocurrio un error";
                    //@ts-ignore
                    $form.insertAdjacentElement('afterend', `<p><b>${err,status}:${message}</b></p>`)   
                }
            }else{
                //Update - PUT
                try {
                    let options = {
                        method:"PUT",
                        headers:{
                            "Content-type" : "application/json; charset=utf-8"
                        },
                        body: JSON.stringify({
                            //@ts-ignore
                            nombre:e.target.nombre.value,
                            //@ts-ignore
                            constelacion:e.target.constelacion.value
                        })
                    }
                    
                    //@ts-ignore
                    let res = await fetch(`http://localhost:5001/santos/${e.target.id.value}`, options),
                        json = await res.json();

                    if(!res.ok) throw {status: res.status, statusText: res.statusText}

                    location.reload();

                } catch (err) {
                    let message = err.statusText || "Ocurrio un error";
                    //@ts-ignore
                    $form.insertAdjacentElement('afterend', `<p><b>${err,status}:${message}</b></p>`)
                }
            }
        }

    });

    //@ts-ignore
    d.addEventListener('click', async (e) => {
        //@ts-ignore
        if(e.target.matches('.edit')){
            //@ts-ignore
            $title.textContent = "Editar Santo";
            //@ts-ignore
            $form.nombre.value = e.target.dataset.name;
            //@ts-ignore
            $form.constelacion.value = e.target.dataset.constellation;
            //@ts-ignore
            $form.id.value = e.target.dataset.id;
        }
        
        //@ts-ignore
        if(e.target.matches('.delete')){
            //@ts-ignore
            let isDelete = confirm(`Estas seguro de eliminar el id ${e.target.dataset.id}`)

            if(isDelete){
                //Delete - DELETE
                try {
                    let options = {
                        method:"DELETE",
                        headers:{
                            "Content-type" : "application/json; charset=utf-8"
                        }
                    }
                    
                    //@ts-ignore
                    let res = await fetch(`http://localhost:5001/santos/${e.target.dataset.id}`, options),
                        json = await res.json();

                    if(!res.ok) throw {status: res.status, statusText: res.statusText}

                    location.reload();

                } catch (err) {
                    let message = err.statusText || "Ocurrio un error";
                    //@ts-ignore
                    alert(`Error: ${err,status}:${message}`)
                }
            }
        }
    })