const d = document;


export const  hamburger = (btnmenu, menu, listamenu) => {
    
    d.addEventListener('click', (e) => {
        const $menu = d.querySelector(menu);
        const $btnMenu = d.querySelector(btnmenu);

        if(e.target.matches(btnmenu) || e.target.matches(`${btnmenu} *`)){
            $menu.classList.toggle('is-active');
            $btnMenu.classList.toggle('is-active');
        }
        
        if(e.target.matches(listamenu)){
            $menu.classList.remove('is-active');
            $btnMenu.classList.remove('is-active');
        }
    })
}

