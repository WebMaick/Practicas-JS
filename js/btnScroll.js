const d = document;

export const btnScroll = (btn) => {

    const $btn = d.querySelector(btn);

    d.addEventListener('scroll', () => {
        
        if(scrollY > 1000) 
            $btn.classList.remove('hidden')
        else
            $btn.classList.add('hidden')
    })

    d.addEventListener('click', (e) => {
        if(e.target.matches(btn)){
            scrollTo(
                {
                    top:0,
                    behavior:'smooth'
                }
            )
        }
    })
}