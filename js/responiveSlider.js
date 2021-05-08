const d=document;



export default function responsiveSlider(btnPrev, btnNext, slider){
    const $slides = d.querySelectorAll(slider)
    
    let i = 0;

    d.addEventListener('click', (e) => {
        //@ts-ignore
        if(e.target.matches(btnPrev) || e.target.matches(`${btnPrev} *`)){
            e.preventDefault();
            $slides[i].classList.remove('slide-active');
            i--;
            
            if(i<0){
                i = $slides.length-1;
            }
            $slides[i].classList.add('slide-active');
        }

        //@ts-ignore
        if(e.target.matches(btnNext) || e.target.matches(`${btnNext} *`)){
            e.preventDefault();
            $slides[i].classList.remove('slide-active');
            i++;
            
            if(i >= $slides.length){
                i = 0;
            }
            $slides[i].classList.add('slide-active');
        }

       
    })
}