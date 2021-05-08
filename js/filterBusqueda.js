const d = document;

/**
 * Esta funcion filtra los cards segun la palabra a buscar en el input
 * @param {String} inputSearch valor del input de busqueda 
 * @param {String} selector    Selector del cual vamos a hacer el filtrado card
 */

export default function filterBusqeuda(inputSearch, selector){
    

    d.addEventListener('keyup', e => {
        //@ts-ignore
        if(e.target.matches(inputSearch)){
            
            //@ts-ignore
            if(e.key === "Escape")e.target.value = ""
            
            
            
            d.querySelectorAll(selector).forEach(el =>
                //@ts-ignore
                el.textContent.toLowerCase().includes(e.target.value)
                ? el.classList.remove('filtro__filter')
                : el.classList.add('filtro__filter')
            )
        }
    })

}