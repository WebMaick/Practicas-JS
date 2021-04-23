import { btnScroll } from "./js/btnScroll.js";
import cuentaRegresiva from "./js/cuentaRegresiva.js";
import { hamburger } from "./js/hamburger.js";
import { reloj, alarma } from "./js/relojalarma.js";

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
});