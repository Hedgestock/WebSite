function search() {
  window.location.href = "/pokedex/pokemon/" + document.getElementById('dex_searchbar').value.toLowerCase();
}

function searchGeneral() {
  window.location.href = "/pokedex/" + document.getElementById('nav_searchbar').value.toLowerCase();
}

function load_partial(html, element_id = "content", next = null){
  document.getElementById(element_id).innerHTML = html;
  if (next)
    next();
}

function httpGetAsync(theUrl, callback, element_id, next)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText, element_id, next);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function changeDescription() {
  document.getElementById(selectedDescription).style.display = "none";
  selectedDescription = document.getElementById("version_description_select").value;
  document.getElementById(selectedDescription).style.display = "block";
}