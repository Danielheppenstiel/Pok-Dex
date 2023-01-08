class UI {
    constructor() {

        this.pokedexContainer = document.getElementById('pokedexContainer');

        this.pokemonImage = document.getElementById('pokemon-img');

        this.pokemonName = document.getElementById('pokemonName');

        this.type = document.getElementById('type');
        this.idNumber = document.getElementById('id-number');

        this.height = document.getElementById('height');
        this.weight = document.getElementById('weight');
        this.abilities = document.getElementById('abilities');

        this.hp = document.getElementById('hp');
        this.attack = document.getElementById('attack');
        this.defense = document.getElementById('defense');
        this.speed = document.getElementById('speed');
        this.specialAttack= document.getElementById('specialAttack');
        this.specialDefense = document.getElementById('specialDefense');
    };


    display(pokemon) {

        this.pokemonName.textContent = pokemon.species.name;

        this.pokemonImage.setAttribute('src', pokemon.sprites.front_default);
        this.type.textContent = pokemon.types[0].type.name;
        this.idNumber.textContent = `#00${pokemon.id}`;

        this.height.innerHTML = `<p><b>Height:</b>  ${pokemon.height} Meters<p/>`;
        this.weight.innerHTML = `<p><b>Weight:</b>  ${pokemon.weight} Pounds</p>`;
        this.abilities.innerHTML = `<p><b>Abilities:</b>  ${pokemon.abilities[0].ability.name}, ${pokemon.abilities[1].ability.name}</p>`;

        this.hp.innerHTML = `<p><b>hp:</b> ${pokemon.stats[0].base_stat}</p>`;
        this.attack.innerHTML = `<p><b>Attack:</b> ${pokemon.stats[1].base_stat}</p>`;
        this.defense.innerHTML = `<p><b>Defense:</b> ${pokemon.stats[2].base_stat}</p>`;
        this.specialAttack.innerHTML = `<p><b>Special Attack:</b> ${pokemon.stats[3].base_stat}</p>`;
        this.specialDefense.innerHTML = `<p><b>Special Defense:</b> ${pokemon.stats[4].base_stat}</p>`;
        this.speed.innerHTML = `<p><b>Speed:</b> ${pokemon.stats[5].base_stat}</p>`;

    };
};