module.exports = {
  getTypes: function (pokemon) {
    var res = [{"name": "", "color": ""}, {"name": "", "color": ""}];
    res[0].name = pokemon.types[0].type.name;
    if(pokemon.types[1]) {
      res[1].name = "/" + pokemon.types[1].type.name;
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
  }
}