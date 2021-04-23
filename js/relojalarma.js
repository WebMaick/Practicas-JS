const d = document;

export const reloj = (iniciarReloj, detenerReloj, contenido ) => {
    let reloj;
    const $relojDitigital = d.getElementById(contenido);
    const $btnreloj = d.querySelector(iniciarReloj);

    d.addEventListener('click', (e) => {
        
        if(e.target.matches(iniciarReloj)){
            reloj = setInterval(() => {
                let horacompleta = new Date().toLocaleTimeString();
                $relojDitigital.innerHTML=`<h2>${horacompleta}</h2>`
            }, 1000);

            e.target.disabled=true;
        }
        
        if(e.target.matches(detenerReloj)){
            $btnreloj.disabled = false;
            clearInterval(reloj);
            $relojDitigital.innerHTML="";
        }
    })
}

export const alarma = (iniciarAlarma, detenerAlarma, sound ) => {

    let alarma;
    const $btnAlarma = d.querySelector(iniciarAlarma);
    
    const $audio = d.createElement('audio');
    $audio.src=sound;

    d.addEventListener('click', (e) =>{
        if(e.target.matches(iniciarAlarma)){
            alarma = setTimeout(() => {
                $audio.play();
            }, 2000);

            e.target.disabled = true;
        }
        
        if(e.target.matches(detenerAlarma)){
            clearTimeout(alarma);
            $audio.pause();
            $audio.currentTime = 0;
            $btnAlarma.disabled=false;
        }
    })
}