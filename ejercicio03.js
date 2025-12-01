async function informacion() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    const data = await res.json()
    console.log("El pokemon es: "+data.name)
    console.log("Su altura es: "+data.height)
    console.log("Su peso es: "+data.weight)
}
informacion()