const d = document;

export default function validaciones_formulario(){
    const $form = d.querySelector('.contact-form'),
        $inputs = d.querySelectorAll('.contact-form [required]');

    $inputs.forEach(input => {
        const $span = d.createElement('span');
        //@ts-ignore
        $span.id = input.name;
        //@ts-ignore
        $span.textContent = input.title;
        $span.classList.add("none",'contact-form-error');
        input.insertAdjacentElement('afterend', $span);
    })

    d.addEventListener('keyup', (e) => {
        //@ts-ignore
        if(e.target.matches('.contact-form [required]')){
            let $input = e.target,
            //@ts-ignore
            pattern = $input.pattern || $input.dataset.pattern;
            
            //@ts-ignore
            if(pattern && $input.value !== ''){
                let regex = new RegExp(pattern)
                
                //@ts-ignore
                return !regex.exec($input.value)
                //@ts-ignore
                ? d.getElementById($input.name).classList.add('is-active')
                //@ts-ignore
                : d.getElementById($input.name).classList.remove('is-active')
            }
                
            if(!pattern){
                //@ts-ignore
                return $input.value === ""
                //@ts-ignore
                ? d.getElementById($input.name).classList.add('is-active')
                //@ts-ignore
                : d.getElementById($input.name).classList.remove('is-active')
            }
        }
    })


    d.addEventListener('submit', e => {
        //e.preventDefault();
        const $loader = d.querySelector('.contact-form-loader'),
        $response = d.querySelector('.contact-form-respuesta');

        $loader.classList.remove('none')
        
        setTimeout(() => {
            $loader.classList.add('none');
            $response.classList.remove('none');
            //@ts-ignore
            $form.reset();
            
            setTimeout(() => {
                $response.classList.add('none');
            }, 2000);

        }, 3000);
        

    })
    
}