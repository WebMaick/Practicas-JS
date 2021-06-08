const $d = document,
    $main_pokemon = $d.querySelector("main"),
    $links_pokemon = $d.querySelector(".pokemon__links");
let url = `https://pokeapi.co/api/v2/pokemon/`;

const loadPokemon = async (url) => {
    try {
        $main_pokemon.innerHTML = ` <img class="pokemon__loader" src="../../img/loader.svg" alt="loader"/> `;
        let res = await fetch(url),
            { results, next, previous } = await res.json(),
            $template = "",
            $prevLink,
            $nextLink;

        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        results.map(async (el) => {
            // console.log(el);
            try {
                let res = await fetch(el.url),
                    data = await res.json();
                // console.log(data);
                if (!res.ok)
                    throw { status: res.status, statusText: res.statusText };

                $template += `
                    <figure class="pokemon__figure">
                        <img src="${data.sprites.front_default}" alt="${data.name}" />
                        <figcaption>${data.name}</figcaption>
                    </figure>
                `;
            } catch (err) {
                //console.log(err);
                let message = err.statusText || "Ocurrio un Error en la API";
                $template += ` 
                <figure>
                    <figcaption>Error ${err.status}: ${message}</figcaption>
                </figure> `;
            }

            $main_pokemon.innerHTML = $template;
            $prevLink = previous ? ` <a href="${previous}">⏮️</a> ` : "";
            $nextLink = next ? ` <a href="${next}">⏭️</a> ` : "";
            $links_pokemon.innerHTML = $prevLink + " " + $nextLink;
        });
    } catch (err) {
        console.log(err);
        let message = err.statusText || "Ocurrio un Error en la API";
        $main_pokemon.innerHTML = ` <p>Error ${err.status}: ${message}</p> `;
    }
};

$d.addEventListener("DOMContentLoaded", () => loadPokemon(url));

$d.addEventListener("click", (e) => {
    //@ts-ignore
    if (e.target.matches(".pokemon__links a")) {
        e.preventDefault();
        //@ts-ignore
        loadPokemon(e.target.getAttribute("href"));
    }
});
