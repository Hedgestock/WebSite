module.exports = {
  typeColors: {
    normal: "gainsboro",
    fighting: "brown",
    flying: "skyblue",
    poison: "purple",
    ground: "tan",
    rock: "saddlebrown", // peru ?
    ghost: "darkslateblue",
    steel: "lightsteelblue",
    fire: "orangered",
    water: "royalblue",
    grass: "limegreen", // forestgreen ?
    electric: "yellow", // gold ?
    psychic: "hotpink",
    ice: "aliceblue",
    dragon: "indigo",
    dark: "#333333",
    bug: "olive",
    fairy: "orchid",
    unknown: "grey",
    shadow: "gray",
  },
  
  backgroundColors: {
    black: "dimgray",
    blue: "skyblue",
    brown: "sienna",
    gray: "lightgray",
    green: "lightgreen",
    pink: "lightpink",
    purple: "plum",
    red: "lightcoral",
    white: "white",
    yellow: "khaki",
  },
  
  getTypes: function (pokemon) {
      console.log("function: getTypes");

    var res = [{"name": "", "color": ""}, {"name": "", "color": ""}];
    res[1].name = pokemon.types[0].type.name;
    res[1].color = this.typeColors[res[1].name];
    if(pokemon.types[1]) {
      res[0].name = pokemon.types[1].type.name;
      res[0].color = this.typeColors[res[0].name];
    } else {
      res[0].color = this.typeColors[res[1].name];
    }
    return res;
  },

  getDefaultVariety: function (species) {
    console.log("function: getDefaultVariety");
    for (var i in species.varieties)
    {
      if (species.varieties[i].is_default)
        return species.varieties[i];
    }
    console.log(new Error().stack);
  },
  
  getDescriptions:  function (species) {
    console.log("function: getDescriptions");
    var res = []
    for (var i in species.flavor_text_entries)
    {
      if (species.flavor_text_entries[i].language.name == "en")
        res.push(species.flavor_text_entries[i]);
    }
    return res;
  },
}