const lista = document.querySelector("ul");

for(let i = 1; i<=10; i++){
    fetch("https://pokeapi.co/api/v2/pokemon/" + i)
        .then(res => res.json())
        .then(data => {
            const tarjeta = document.createElement("li")
            tarjeta.innerHTML = `
            <p>Nombre: ${data.name}</p>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>ID: ${data.id}</p>
        `
        lista.appendChild(tarjeta)
        })
        .catch(err => console.error("Error:", err));
}
