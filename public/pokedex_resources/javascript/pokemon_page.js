var selectedDescription;

function set_pokedata_interactions(){
  selectedDescription = document.getElementById("version_description_select").value;
  document.getElementById(selectedDescription).style.display = "block";
  species_id = document.getElementById("pokedatas").getAttribute('species_id');
  document.getElementById("prev_button").onclick = function () { location.href = '/pokedex/pokemon/' + ((parseInt(species_id) + 800)%802 + 1); };
  document.getElementById("next_button").onclick = function () { location.href = '/pokedex/pokemon/' + ((parseInt(species_id) % 802) + 1); };
}

/*window.addEventListener("load",function () { 
  selectedDescription = document.getElementById("version_description_select").value;
  document.getElementById(selectedDescription).style.display = "block";
},false);*/