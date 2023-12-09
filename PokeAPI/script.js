function buscarPokemon() {
    const input = document.getElementById('pokemonInput');
    const resultadoPokemon = document.getElementById('resultadoPokemon');

    const pokemonNombre = input.value.toLowerCase();

    if (!pokemonNombre) {
        alert('Ingrese un nombre de Pokémon válido.');
        return;
    }

    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNombre}/`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se encontró el Pokémon.');
            }
            return response.json();
        })
        .then(data => {
            mostrarResultado(data);
        })
        .catch(error => {
            console.error('Error al obtener datos del Pokémon:', error);
            resultadoPokemon.innerHTML = 'Error al obtener datos del Pokémon.';
        });
}

function mostrarResultado(pokemon) {
    const resultadoPokemon = document.getElementById('resultadoPokemon');

    const tipos = pokemon.types.map(type => type.type.name).join(', ');

    resultadoPokemon.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <p>ID: ${pokemon.id}</p>
        <p>Nombre: ${pokemon.name}</p>
        <p>Tipos: ${tipos}</p>
        
    `;
}

//<img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}">