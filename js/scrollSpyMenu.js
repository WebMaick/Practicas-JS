const d = document;

export const scrollSpyMenu = () => {
    
    const $section = d.querySelectorAll("section[data-scroll-spy]");
    
    const callback = (entries) => {
        
        entries.forEach(entry => {

            const id = entry.target.getAttribute('id')

            if(entry.isIntersecting){
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add('active-spy')
            }else{
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove('active-spy')
            }
        });
    }
    
    const observer = new IntersectionObserver(callback, {
        //root
        //rootMargin:"-250px"
        threshold:0.5
        //threshold:[0.5,0.75]
    })
    
    $section.forEach(el => observer.observe(el))
}