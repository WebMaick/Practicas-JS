const d = document,
n = navigator;

export default function deteccionCamara(id){
    const $video = d.getElementById(id);

    // console.log(n.mediaDevices.getUserMedia)

    if(n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia({video:true, audio:false})
        .then(reproducir => {
            // console.log(reproducir)
            $video.srcObject = reproducir;
            $video.play();
        })
        .catch(err => {
            $video.insertAdjacentHTML('beforebegin', `<p class="camara__error"><mark>${err}</mark></p>`)
            // console.log(`Sucedio un error: ${err}`)
        })
    }
}