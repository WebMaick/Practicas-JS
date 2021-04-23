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
});