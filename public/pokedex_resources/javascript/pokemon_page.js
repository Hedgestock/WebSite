function printName (elt, res) 
{
  return elt.toString();
}

function printTypes(types)
{
  document.getElementById("type-frame").innerHTML += types.forEach(printName) + " | ";
}

