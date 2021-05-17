//@ts-check
import { btnScroll } from "./js/btnScroll.js";
import cuentaRegresiva from "./js/cuentaRegresiva.js";
import darkMode from "./js/darkMode.js";
import deteccionCamara from "./js/deteccionCamara.js";
import deteccionDispositvos from "./js/deteccionDispositvos.js";
import deteccionRed from "./js/deteccionRed.js";
import filterBusqeuda from "./js/filterBusqueda.js";
import getGeolocalizacion from "./js/geolocalizacion.js";
import { hamburger } from "./js/hamburger.js";
import narrador from "./js/narrador.js";
import { reloj, alarma } from "./js/relojalarma.js";
import responsiveSlider from "./js/responiveSlider.js";
import responsive from "./js/responsive.js";
import { scrollSpyMenu } from "./js/scrollSpyMenu.js";
import { sorteoDigital } from "./js/sorteoDigital.js";
import { testerResponsive } from "./js/testerResponsive.js";
import validaciones_formulario from "./js/validaciones_formulario.js";
import videoInteligente from "./js/videoInteligente.js";

const d = document;
    


d.addEventListener('DOMContentLoaded', () =>{
    /*=== Funcion para menu hamburger ===*/
    hamburger('.btn__menu', '.menu__nav', '.menu__nav li a');

    /*=== Funcion para Reloj - Digital ===*/
    reloj('.inicia-reloj', '.detiene-reloj', 'contenido-ra');
    /*=== Funcion para Alarma ===*/
    alarma('.inicia-alarma', '.detiene-alarma', 'assets/audio-video/alarma.mp3');

    /*=== Funcion para Cuenta Regresiva ===*/
    cuentaRegresiva('regresiva__content', 'Febrary 28, 2022 13:45:00', 'Feliz cumleaños MICHI');

    /*=== Funcion para Btn Scroll ===*/
    btnScroll('.btn__scroll');

    /*=== Funcion para cambiar MODO DARK ===*/
    darkMode('.btn__dark', 'mode__dark')

    /*=== Funcion para Responsive ===*/
    responsive(
        'youtube', 
        '(min-width: 1024px)', 
        `<a href='https://www.youtube.com/watch?v=0bmE9XY3sOc' target='_blank' rel='noopener'>Ver Video...</a>`, 
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/0bmE9XY3sOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    
    
    responsive(
        'gmaps', 
        '(min-width: 1024px)', 
        `<a href='https://www.openstreetmap.org/#map=17/-16.49107/-68.11951&layers=N' target='_blank' rel='noopener'>Ver Video...</a>`, 
        '<iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-68.12156438827516%2C-16.492540452879624%2C-68.11745524406435%2C-16.48959822943036&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/><small></small>'
    );


    /*=== Funcion para Tester-Responsive ===*/
    testerResponsive('form-tester');

    /*=== Funcion para deteccion de Dispositivos ===*/
    deteccionDispositvos('user-device');

    /*=== Funcion de deteccion de camara ===*/
    deteccionCamara('webcam');

    /*=== Funcion para Geolocalizacion ===*/
    getGeolocalizacion('geolocalizacion');


    /*=== Funcion para Filtro de Busqueda ===*/
    filterBusqeuda('.card__filter', '.card');    

    /*=== Funcion para Sorteo Digital ===*/
    sorteoDigital('#winner-btn', '.player');

    /*=== Funcion para Slider Slide ===*/
    responsiveSlider('#prev', '#next', '.slider__slide');

    /*=== Funcion para Scroll Spia ===*/
    scrollSpyMenu();

    /*=== Funcion Video Inteligente ===*/
    videoInteligente();

    /*=== Funcion para validar formulario ===*/
    validaciones_formulario();
});


/*=== Funcion Para deteccion de Red ===*/
deteccionRed();


/*=== Funcion para narrador ===*/
narrador();