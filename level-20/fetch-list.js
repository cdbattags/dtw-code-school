const get = require('./level-20/get')

async function main() {
    const list = [
        'bulbasaur',
        'squirtle',
        'charmander'
    ]

    for (const pokemon of list) {
        const stuff = await get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        console.log(stuff.id)
    }
}

main()
