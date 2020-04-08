const get = require('./level-20/get')

get('https://pokeapi.co/api/v2/pokemon/charizard').then(function(stuff) {
    console.log(stuff);
})
