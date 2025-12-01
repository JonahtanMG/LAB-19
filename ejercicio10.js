const div = document.querySelector("div");

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(res => res.json())
    .then(data => {
        const statsHTML = data.stats.map(stat => {
            return `<p>${stat.stat.name}: ${stat.base_stat}</p>`;
        }).join("");

        const tipo = data.types.map(t => t.type.name).join(", ");
        div.innerHTML = `
            <p>Nombre: ${data.name}</p>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>Tipos: ${tipo}</p>
            <p>${statsHTML}</p>
        `
    })
    .catch(err => console.error("Error:", err));