const d= document,
    w=window;

export default function responsive (id, mq, movile, desktop){
    
    const $contenedor = d.getElementById(id);
    let mediaquery = w.matchMedia(mq);
    
    const responsive = (e) => {
        if(e.matches){
            $contenedor.innerHTML = desktop;
        }else{
            $contenedor.innerHTML = movile;
        }
    }

    mediaquery.addEventListener('change',responsive);
    
    responsive(mediaquery);
}