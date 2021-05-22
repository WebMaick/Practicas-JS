//@ts-ignore
const d = document,
    $main = d.querySelector('main');


    const getHTML = async(url) => {
        try {
            const res = await fetch(url),
                data = await res.text();
    
            if(!res.ok) throw {status: res.status, statusText: res.statusText}

            $main.innerHTML = data
        } catch (err) {
            let message = err.statusText || 'Ocurrio un error';
            $main.insertAdjacentHTML('afterend',`<p><b>Error: ${err.status}: ${message}</b></p>`)
        }
    }

    d.addEventListener('DOMContentLoaded', () => {
        getHTML('pages/home.html')
    })

    d.addEventListener('click', e => {
        //@ts-ignore
        if(e.target.matches('.header__menu a')){
            e.preventDefault();
            //@ts-ignore
            getHTML(`${e.target.href}`)
        }
    })