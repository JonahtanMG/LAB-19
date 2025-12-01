const siguiente = document.getElementById("seguir");
const retroceder = document.getElementById("retroceder");
const tarjeta = document.getElementById("tarjeta");

let paginaActual = 1; 
let pokemons = [];

//CARGA LOS 12 POKEMONS
async function cargarPokemons() {
    for (let i = 1; i <= 12; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await res.json();
        pokemons.push({
            id: data.id,
            nombre: data.name,
            img: data.sprites.front_default
        });
    }
    mostrarPagina();
}

//MUESTRA LOS 3 SEGUN LA PAGINA
function mostrarPagina() {
    tarjeta.innerHTML = "";

    const inicio = (paginaActual - 1) * 3;
    const fin = inicio + 3;

    const grupo = pokemons.slice(inicio, fin);

    grupo.forEach(p => {
        const div = document.createElement("div");
        div.innerHTML = `
            <img src="${p.img}">
            <P>${p.nombre}</P>
            <p>ID: ${p.id}</p>
        `;
        tarjeta.appendChild(div);
    });
}

//BOTON DE SEGUIR
siguiente.addEventListener("click", () => {
    if (paginaActual < 4) {
        paginaActual++;
        mostrarPagina();
    }
});

//BOTON DE RETROCEDER
retroceder.addEventListener("click", () => {
    if (paginaActual > 1) {
        paginaActual--;
        mostrarPagina();
    }
});

cargarPokemons();