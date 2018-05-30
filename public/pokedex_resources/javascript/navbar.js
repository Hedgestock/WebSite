function searchGeneral() {
  window.location.href = "/pokedex/" + document.getElementById('nav_searchbar').value.toLowerCase();
}

window.addEventListener("load",function () {
  document.getElementById("nav_searchbar").addEventListener("keydown", function(event) {

    // On "Enter" key
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      searchGeneral();
    }
  });
},false);