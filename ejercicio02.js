fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(res=> res.json())
    .then(data=> {
        console.log("El pokemon es: "+data.name)
        console.log("Su altura es: "+data.height)
        console.log("Su peso es: "+data.weight)
    })
    .catch(err => console.error("Error:", err));