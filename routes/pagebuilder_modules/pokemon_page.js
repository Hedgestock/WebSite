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
    fairy: "orchid",
    unknown: "grey",
    shadow: "gray",
  },
  
  getTypes: function (pokemon) {
    var res = [{"name": "", "color": ""}, {"name": "", "color": ""}];
    res[0].name = pokemon.types[0].type.name;
    res[0].color = this.typeColors[res[0].name];
    if(pokemon.types[1]) {
      res[1].name = pokemon.types[1].type.name;
      res[1].color = this.typeColors[res[1].name];
    } else {
      res[1].color = this.typeColors[res[0].name];
    }
    return res;
  },

  geDefaultVariety: function (species) {
    for (var i in species.varieties)
    {
      if (species.varieties[i].is_default)
        return species.varieties[i];
    }
    console.log(new Error().stack);
  },
}