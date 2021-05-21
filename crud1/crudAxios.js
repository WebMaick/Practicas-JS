//const axios = require('axios').default;
//import axios from 'axios'

const d = document,
    $table = d.querySelector('.crud-table'),
    $form = d.querySelector('.crud-form'),
    $title = d.querySelector('.crud-title'),
    //@ts-ignore
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();


    const getAll = async () => {
        try {
            let res = await axios.get('http://localhost:5001/santos'),
                json = await res.data;
            
            
            json.forEach(el => {
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

    d.addEventListener('DOMContentLoaded', getAll);

    d.addEventListener('submit', async e => {
        if(e.target === $form){
            e.preventDefault();

            if(!e.target.id.value){
                //Create - POST
                try {
                    let options = {
                        method: "POST",
                        headers: {
                            "Content-type" : "application/json; charset=utf-8"
                        },
                        data: JSON.stringify({
                            //@ts-ignore
                            nombre:e.target.nombre.value,
                            //@ts-ignore
                            constelacion:e.target.constelacion.value
                        })
                    }

                    let res = await axios(`http://localhost:5001/santos`, options),
                        json = await res.data;

                    
                    location.reload();
                } catch (err) {
                    let message = err.statusText || "Ocurrio un error";
                    //@ts-ignore
                    $form.insertAdjacentElement('afterend', `<p><b>${err,status}:${message}</b></p>`)   
                }

            }else{
                //Update - UPDATE
                try {
                    let options = {
                        method: "PUT",
                        headers: {
                            "Content-type" : "application/json; charset=utf-8"
                        },
                        data: JSON.stringify({
                            //@ts-ignore
                            nombre:e.target.nombre.value,
                            //@ts-ignore
                            constelacion:e.target.constelacion.value
                        })
                    }

                    let res = await axios(`http://localhost:5001/santos/${e.target.id.value}`, options),
                        json = await res.data;

                    
                    location.reload();
                } catch (err) {
                    let message = err.statusText || "Ocurrio un error";
                    //@ts-ignore
                    $form.insertAdjacentElement('afterend', `<p><b>${err,status}:${message}</b></p>`)   
                }
            }
        }
    })

    d.addEventListener('click', async(e) => {
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