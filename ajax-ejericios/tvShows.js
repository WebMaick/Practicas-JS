//@ts-ignore
const d = document,
    //@ts-ignore
    $shows = d.getElementById("tv__shows"),
    //@ts-ignore
    $template = d.getElementById("show-template").content,
    //@ts-ignore
    $fragment = d.createDocumentFragment();

d.addEventListener("keypress", async (e) => {
    //@ts-ignore
    if (e.target.matches("#search")) {
        // console.log(e.key, e.keyCode);
        if (e.key === "Enter") {
            try {
                $shows.innerHTML =
                    ' <img class="tv__loader" src="../../img/loader.svg" alt="loader" /> ';

                //@ts-ignore
                let nombreInput = e.target.value.toLowerCase(),
                    url = `http://api.tvmaze.com/search/shows?q=${nombreInput}`;

                const res = await fetch(url),
                    json = await res.json();

                if (!res.ok)
                    throw { status: res.status, statusText: res.statusText };

                if (json.length === 0) {
                    $shows.innerHTML = ` <h2 class="tv__noexiste">No existen resultado de tu busqueda: ${nombreInput}</h2> `;
                } else {
                    json.map((el) => {
                        $template.querySelector("h3").textContent =
                            el.show.name;

                        $template.querySelector("div").innerHTML = el.show
                            .summary
                            ? el.show.summary
                            : "Sin descripciòn.";

                        $template.querySelector("img").src = el.show.image
                            ? el.show.image.medium
                            : "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png";

                        $template.querySelector("img").alt = el.show.name;
                        $template.querySelector("a").href = el.show.url
                            ? el.show.url
                            : "#";
                        $template.querySelector("a").target = el.show.url
                            ? "_blank"
                            : "_self";

                        $template.querySelector("a").textContent = el.show.url
                            ? "Ver Mas..."
                            : "";

                        let $clone = d.importNode($template, true);
                        $fragment.appendChild($clone);
                    });
                    $shows.innerHTML = "";
                    $shows.appendChild($fragment);
                }
            } catch (err) {
                console.log(err);
                let message =
                    err.statusText || "Ocurrio un error en el llamdo de API";
                $shows.innerHTML = ` <p class="tv__error">Error ${err.status} ${message}</p> `;
            }
        }
    }
});
