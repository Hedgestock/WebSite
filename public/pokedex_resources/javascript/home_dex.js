function set_pokedata_interactions(){
  selectedDescription = document.getElementById("version_description_select").value;
  document.getElementById(selectedDescription).style.display = "block";
//  species_id = document.getElementById("pokedatas").getAttribute('species_id');
//  document.getElementById("prev_button").onclick = function () { location.href = '/pokedex/pokemon/' + ((parseInt(species_id) + 800)%802 + 1); };
//  document.getElementById("next_button").onclick = function () { location.href = '/pokedex/pokemon/' + ((parseInt(species_id) % 802) + 1); };
}

function getRandomPokedata(){
  random_id = 1 + Math.floor(Math.random() * document.getElementById("pokelist").getAttribute('count'));
  httpGetAsync("/pokedata/pokemon/" + random_id , load_partial, "pokedata_container", set_pokedata_interactions);
}

window.addEventListener("load",function () { 
  document.getElementById("dex_searchbar").addEventListener("keydown", function(event) {

    // On "Enter" key
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      searchPokemon("dex_searchbar");
    }
  });
},false);

httpGetAsync("/pokedata/pokelist", load_partial, "pokelist_container", getRandomPokedata);
