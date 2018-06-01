const  createError = require('http-errors');
const  express = require('express');
const  path = require('path');
const  router = express.Router();
const  Pokedex = require('pokedex-promise-v2');
const  options = {
  protocol: 'https',
  //hostName: 'localhost:443',
  versionPath: '/api/v2/',
  //cacheLimit: 24 * 60 * 60 * 1000, // h * m * s * ms
  //timeout: 5 * 1000 // 5s
}
const  P = new Pokedex(options);

const pokedexHelper = require("./pagebuilder_modules/pokedex_helper.js");



async function servePokedexList (req, res, next) {
  console.log("serving pokedex table");
  function renderHomePage(pokelist) {
    res.render('pokedex/partials/pokelist', {
      title: "Aïtokédex",
      pokelist: pokelist,
    });
  }
  var interval = {
    limit: 2000,
    offset: 0
  }
  P.getPokemonSpeciesList(interval,function(response, error) {
    if(!error) {
      renderHomePage(response);
    } else {
      console.log(error);
      next(createError(error.response.status, error.response.statusText));
      //next();
    }
  });
}

/* Try to serve a pokemon page */
function servePokemonDataPage(req, res, next) {
  function renderPokedata(pokemon) {
    console.log("function: renderpokedexHelper");
    res.render('pokedex/partials/pokemon_data', {
      title: "Pokémon: " + pokemon.name,
      pokemon: pokemon,
      species: species,
      types: pokedexHelper.getTypes(pokemon),
      descriptions: pokedexHelper.getDescriptions(species),
      background: pokedexHelper.backgroundColors[species.color.name],
    });
  }
  
  var species = undefined;
  var pokemon = undefined;
  P.getPokemonSpeciesByName(req.params.id, function(response, error) {
    console.log("function: P.getPokemonSpeciesByName");
    if(!error) {
      species = response;
      P.getPokemonByName(pokedexHelper.getDefaultVariety(species).pokemon.name, function(response, error) {
        console.log("function: P.getPokemonByName");
        if(!error) {
          pokemon = response;
          renderPokedata(pokemon, species);
        } else {
          console.log(error);
          next(createError(error.response.status, error.response.statusText));
          //next();
        }
      });
    } else {
      console.log(error);
      next(createError(error.response.status, error.response.statusText));
      //next();
    }
  });
}


/* GET a pokedex list */
router.get('/pokelist', servePokedexList);

/* GET a pokemon data page */
router.get('/pokemon/:id', servePokemonDataPage);

/* GET a type data page */
//router.get('/type/:id', serveTypePage);


// catch 404 and forward to error handler
router.use(function(req, res, next) {
  next(createError(404));
});

// error handler
router.use(function(err, req, res, next) {
  
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('pokedex/partials/error');
});

module.exports = router;
