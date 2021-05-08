const d = document;

/**
 * Funcion que realiza un sorteo digita a partir de una lista en el HTML
 * @param {String} btn Valor del boton al hacer click e inicio de sorteo
 * @param {String} selector Valor del selecto de busqueda de ganadores
 */

export const sorteoDigital = (btn, selector) => {
    /**
     * Funcion que ejecuta el sorteo de un listado en el HTML
     * @param {String} selector El valor sobre los el que se buscara
     * @returns     Retorna un ganador del sorteo   
     */
    const getWinner = (selector) => {
        const $players = d.querySelectorAll(selector),
                random = Math.floor(Math.random()*$players.length),
                winner = $players[random];

        // console.log($players, random, winner)

        return `El Ganador es: ${winner.textContent}`
    }

    d.addEventListener('click', e => {
        //@ts-ignore
        if(e.target.matches(btn)){
            let result = getWinner(selector);
            alert(result)
            // console.log(result)
        }
    })
}



/*

//El siguiente codigo es para el contenido de YOUTUBE y poder hacer un sorteo desde su consola, La misma logica se podra hacer en face u otra red social solo debemos averiguar las clases que usan

const getWinnerComentario = (selector) => {
    const $players = document.querySelectorAll(selector);
    const random = Math.floor(Math.random() * $players.length);
    const winner = $players[random];

    return `El ganador es: ${winner.textContent}`
}

getWinnerComentario("ytd-comment-thread-renderer #author-text span")

*/