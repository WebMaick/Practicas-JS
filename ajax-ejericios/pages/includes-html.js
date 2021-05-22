document.addEventListener('DOMContentLoaded', e => {
    
    const includeHTML = async(el, url) => {
        // console.log(el,url)
        try {
            const res = await fetch(url),
                data = await res.text();
            
            if(!res.ok) throw {status: res.status, statusText: res.statusText}
        
            el.outerHTML = data
        
        } catch (err) {
            let message = err.statusText || 'Error al cargar el archivo, verifique que este haciendo a peticion por http o https';
            el.outerHTML = `<div><p>Error: ${err.status}: ${message}</p></div>`    
        }
    }

    const elem = document.querySelectorAll('[data-include]')
    elem.forEach(el => includeHTML(el, el.getAttribute("data-include")));

    
})