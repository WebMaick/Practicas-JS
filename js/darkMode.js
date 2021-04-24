const d = document;

export default function darkMode (btnDark, classDark) {
    const $btndark = d.querySelector(btnDark);
    const $variables = d.querySelectorAll("[data-dark]")
    
    const modo = localStorage.getItem('dark');

    let moon = '☪️',
        sun = '☀️';


    const modoDark = () => {
        $btndark.innerHTML = sun;
        $variables.forEach(el => {
            el.classList.add(classDark);
        });
        localStorage.setItem('dark', 'modoDark');
    }
    
    const modoLigth = () => {
        $btndark.innerHTML = moon;
        $variables.forEach(el => {
            el.classList.remove(classDark);
        });
        localStorage.setItem('dark', 'modoLigth');
    }


    if(modo === 'modoDark')modoDark();
    if(modo === 'modoLigth') modoLigth();;
    
       
    

    d.addEventListener('click', e => {
        if(e.target.matches(btnDark)){
            if($btndark.textContent === moon){
                modoDark();                
            }else{
                modoLigth();
            }
        }
    })
}