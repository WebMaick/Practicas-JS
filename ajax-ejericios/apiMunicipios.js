//@ts-ignore
const d = document,
    $selectEstado = d.getElementById("estado"),
    $selectMunicipio = d.getElementById("municipio");

const cargaEstados = async () => {
    // const res = await fetch(``)
};

const cargaMunicipios = (estado) => {};

d.addEventListener("DOMContentLoaded", cargaEstados);

$selectEstado.addEventListener("change", (e) =>
    //@ts-ignore
    cargaMunicipios(e.target.value)
);
