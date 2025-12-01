fetch("https://pokeapi.co/api/v2/pokemon/charizard")
    .then(response => response.json())
    .then(data => {
        const frontDefaultSprite = data.sprites.front_default;
        console.log("URL de sprites.front_default de Charizard: ");
        console.log(frontDefaultSprite);
    })
    .catch(err => console.error("Error:", err));