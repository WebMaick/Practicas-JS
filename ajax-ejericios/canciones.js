//@ts-ignore
const d = document,
    //@ts-ignore
    $form = d.getElementById("canciones__form"),
    //@ts-ignore
    $loader = d.querySelector(".canciones__loader"),
    //@ts-ignore
    $error = d.querySelector(".canciones__error"),
    //@ts-ignore
    $main = d.querySelector(".canciones__main"),
    //@ts-ignore
    $artist = d.querySelector(".canciones__artist"),
    //@ts-ignore
    $letra = d.querySelector(".canciones__letra");

$form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
        $loader.classList.remove("none");
        //@ts-ignore
        let artista = e.target.artista.value.toLowerCase(),
            //@ts-ignore
            tema = e.target.tema.value.toLowerCase(),
            $artistTemplate = "",
            $letraTemplate = "",
            artistApi = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`,
            letraApi = `https://api.lyrics.ovh/v1/${artista}/${tema}`,
            artistFetch = fetch(artistApi),
            letraFetch = fetch(letraApi),
            [artistRes, letraResr] = await Promise.all([
                artistFetch,
                letraFetch,
            ]),
            artistData = await artistRes.json(),
            letraData = await letraResr.json();

        if (artistData.artists === null) {
            $artistTemplate = `<h2>No existe el interprete ${artista}</h2>`;
        } else {
            let artist = artistData.artists[0];
            $artistTemplate = `
                <h2>${artist.strArtist}</h2>
                <img src="${artist.strArtistThumb}" alt="${artist.strArtist}" />
                <p>
                    ${artist.intBornYear} - ${artist.intDiedYear || "Presente"}
                </p>
                <p>${artist.strCountry}</p>
                <p>${artist.strGenre} - ${artist.strStyle}</p>
                <a href="http://${
                    artist.strWebsite
                }" target="_blank">Sitio Web</a>
                <p>${artist.strBiographyEN}</p>
            `;
        }

        if (letraData.error) {
            $letraTemplate = ` <h2>No existe la cancio ${tema}</h2> `;
        } else {
            $letraTemplate = `
                <h2>${tema}</h2>
                <blockquote>${letraData.lyrics}</blockquote>
            `;
        }

        $loader.classList.add("none");
        $artist.innerHTML = $artistTemplate;
        $letra.innerHTML = $letraTemplate;
    } catch (err) {
        console.log(err);
        $loader.classList.add("none");
        let message = err.statusText || "Ocurrion un error al consultar";
        $error.innerHTML = ` <p class="error>Error ${err.status} ${message}</p> `;
    }
});
