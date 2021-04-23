const d = document;

export default function cuentaRegresiva (contenedor, fechaLimite, mensaje) {

    const $cuentaregresiva = d.getElementById(contenedor);
    const fechaLimit = new Date(fechaLimite).getTime();
    
    const intervalo = setInterval(() => {
        const fechaActual = fechaLimit - new Date().getTime();
        let dia = Math.floor(fechaActual/(1000*60*60*24)),
            horas = ("0"+ Math.floor((fechaActual%(1000*60*60*24))/(1000*60*60))).  slice(-2),
            minutos = ("0"+ Math.floor((fechaActual%(1000*60*60*24))/(1000*60))).  slice(-2),
            segundos = ("0"+ Math.floor((fechaActual%(1000*60*60*24))/(1000))).  slice(-2)
            
        $cuentaregresiva.innerHTML=`<h2>${dia} <small>Dias</small> ${horas} <small>Horas</small> ${minutos} <small>Minutos</small> ${segundos} <small>Segundos</small></h2>`;
        
        
        if(fechaActual < 1){
            clearInterval(intervalo);
            $cuentaregresiva.innerHTML = `<h2>${mensaje}</h2>`;
        }
    }, 1000);

    

}       