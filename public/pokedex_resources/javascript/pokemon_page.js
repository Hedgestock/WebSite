var selectedDescription;

function changeDescription() {
  document.getElementById(selectedDescription).style.display = "none";
  selectedDescription = document.getElementById("version_description_select").value;
  document.getElementById(selectedDescription).style.display = "block";
}

window.addEventListener("load",function () { 
  selectedDescription = document.getElementById("version_description_select").value;
  document.getElementById(selectedDescription).style.display = "block";
},false);