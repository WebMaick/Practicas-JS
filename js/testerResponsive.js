const d= document;

export const testerResponsive = (form) => {
    const $form = d.getElementById(form);
    let tester;

    d.addEventListener('submit', (e) => {
        if(e.target === $form){
            e.preventDefault();
            tester = window.open($form.url.value, 'testet', `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`);
        }
    })

    d.addEventListener('click', (e) => {
        if(e.target === $form.cerrar){
            tester.close();
        }
    })
} 