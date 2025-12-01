idPokemon = parseInt(Math.random()*898+1)

fetch("https://pokeapi.co/api/v2/pokemon/"+idPokemon)
    .then(res=> res.json())
    .then(data=> console.log("El pokemon es: "+data.name))
    .catch(err => console.error("Error:", err));