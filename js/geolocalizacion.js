const d = document,
n = navigator;
 
export default function getGeolocalizacion(id) {
    const $id = d.getElementById(id);

    const opciones = {
        enableHighAccuracy:true,
        timeout:5000,
        maximumAge:0
    }

    const success = (position) => {
        
        const {latitude, longitude, accuracy} = position.coords
        $id.innerHTML = `
            <p>TU posiciòn actual es:</p>
            <ul>
                <li>Latitud: <b>${latitude}</b></li>
                <li>Longitud: <b>${longitude}</b></li>
                <li>Preisciòn <b>${accuracy} metros</b></li>
            </ul>

            <a class="btn btn-primary" target="_blank" rel="noopener" href="https://www.google.com/maps/@${latitude}.${longitude}.20z">Ver en Google Maps</a>
        `
    }

    const errors = (err) => {
        $id.innerHTML = `
            <p class="camara__error">
                <mark>
                    Error: ${err.code}: ${err.message}
                </mark>
            </p>
        `
        console.log(`Error: ${err.code}: ${err.message}`)
    }

    n.geolocation.getCurrentPosition(success,errors, opciones)
}