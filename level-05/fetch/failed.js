const get = require('./level-20/get')

get('https://pokeapi.co/api/v2/pokemon/not-a-pokemon').then(function(stuff) {
    console.log(stuff);
})
