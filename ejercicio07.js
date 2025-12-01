const idPokemon = document.getElementById("buscarId");
const boton = document.querySelector("button");
const div = document.querySelector("div");

boton.addEventListener("click", () => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + idPokemon.value)
        .then(res => res.json())
        .then(data => {
            const habilidades = data.abilities.map(a=>a.ability.name).join(", ");
            div.innerHTML = `
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>Nombre: ${data.name}</p>
            <p>ID: ${data.id}</p>
            <p>Altura: ${data.height}</p>
            <p>Peso: ${data.weight}</p>
            <p>Habilidades: ${habilidades}</p>
        `
        })
        .catch(err => console.error("Error:", err));
})