const d = document,
w = window,
n = navigator;

export default function deteccionRed(){

    
    w.addEventListener('online', () => {
        const $div = d.createElement('div');
        if(n.onLine){
            $div.innerHTML = `
                <div class="deteccion__content">
                    <img src="../img/connect.svg" alt="connect" />
                    <h2>Conexion Reestablecida</h2>
                </div>
            `;
            $div.classList.add('deteccion__online');
        }

        d.body.insertAdjacentElement('afterbegin', $div);
        
        setTimeout(() => {
            d.body.removeChild($div)
        }, 2000);
        
    })
    
    w.addEventListener('offline', () => {
        const $div = d.createElement('div');
        if(!n.onLine){
            $div.innerHTML = `
            <div class="deteccion__content">
                <img src="../img/disconnect.svg" alt="disconnect" />
                <h2 class="offline">Lo siento Tu CONEXION de RED se PERDIO</h2>
            </div>
            `;
            $div.classList.add('deteccion__online');
        }
        d.body.insertAdjacentElement('afterbegin', $div)
        setTimeout(() => {
            d.body.removeChild($div)
        }, 2000);
    })

}