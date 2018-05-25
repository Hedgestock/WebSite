function search() {
  window.location.href = "/pokedex/pokemon/" + document.getElementById('dex_searchbar').value.toLowerCase();
}

window.addEventListener("load",function () { 
  document.getElementById("dex_searchbar").addEventListener("keydown", function(event) {

    // On "Enter" key
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      search();
    }
  });
},false);