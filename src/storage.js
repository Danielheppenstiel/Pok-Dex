class LocalStorage {
    constructor() {
        this.pokemon;
        this.defaultPokemon = 'charizard';
    };

    getLocalStorage() {

        if (localStorage.getItem('pokemon') === null) {
            this.pokemon = this.defaultPokemon;
        } else {
            this.pokemon = localStorage.getItem('pokemon');
        };

        return this.pokemon;

    };

    setLocalStorage(pokemon) {

        localStorage.setItem('pokemon', pokemon);

    };


};