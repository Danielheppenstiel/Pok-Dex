class Pokemon {
    constructor(name) {
        this.name = name;
    }

    async getPokemon() {
        const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.name}/`);

        const pokemonData = await pokemonResponse.json();

        return pokemonData;

    };

    changePokemon(pokemon) {

        this.name = pokemon;

    };
};