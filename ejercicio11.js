const pokemon = document.getElementById("buscar");
const boton = document.querySelector("button");
const div = document.querySelector("div");

boton.addEventListener("click", () => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon.value)
        .then(res => res.json())
        .then(data => {
            const statsHTML = data.stats.map(stat => {
                return `<li>${stat.stat.name}: ${stat.base_stat}</li>`;
            }).join("");

            const tipo = data.types.map(t => t.type.name).join(", ");
            div.innerHTML = `
            <p>Nombre: ${data.name}</p>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>Tipos: ${tipo}</p>
            <ul>${statsHTML}</ul>
        `
        })
        .catch(err => console.error("Error:", err));
})