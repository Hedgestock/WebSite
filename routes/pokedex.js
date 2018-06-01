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




async function serveHomePage (req, res, next) {
  console.log("serving homedex");
  function renderHomePage(pokelist) {
    res.render('pokedex/home_dex', {
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
      next();
    }
  });
}

/* Try to serve a pokemon page */
function servePokemonPage(req, res, next) {
  console.log("serving pokemonpage");
  console.log("function: servePokemonPage");
  function renderPokepage(id) {
    console.log("function: renderPokemonPage");
    res.render('pokedex/pokemon_page', {
      title: "Pokémon: Loading",
      id: id,
    });
  }
  renderPokepage(req.params.id);
}

function serveTypePage(req, res, next) {
  console.log("serving typepage");
  function renderTypepage(response) {
    res.render('pokedex/type_page', {
      title: "type",
      type: response,
    });
  }

  P.getTypeByName(req.params.id) 
    .then(renderTypepage)
    .catch(function(error) {
      console.log(error);
      next();
    });
}

/* GET the home dex page */
router.get('/', serveHomePage);
router.get('/index', serveHomePage);

/* GET a pokemon page */
router.get('/pokemon/:id', servePokemonPage);

/* GET a type page */
router.get('/type/:id', serveTypePage);


/**
** Chain of routing in case category is missing
*/

/* GET a pokemon page */
//router.get('/:id', servePokemonPage);

/* GET a type page */
//router.get('/:id', serveTypePage);

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
  res.render('pokedex/error');
});

module.exports = router;
