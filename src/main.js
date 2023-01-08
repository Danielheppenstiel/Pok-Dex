const storage = new LocalStorage();

const pokemon = new Pokemon(storage.getLocalStorage());

const ui = new UI();

const changePokemonForm = document.querySelector('.input-container');

document.addEventListener('DOMContentLoaded', getPokemon);

changePokemonForm.addEventListener('submit', (e) => {

   const newPokemon = document.getElementById('input-field').value;

   pokemon.changePokemon(newPokemon.toLowerCase());

   storage.setLocalStorage(newPokemon);

   getPokemon();

   e.preventDefault();
});


function getPokemon() {

   pokemon.getPokemon()
   .then(data => {
    console.log(data);
    ui.display(data);
 });

};


