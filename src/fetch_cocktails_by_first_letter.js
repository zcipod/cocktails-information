const https = require('https')
const {getUsefulInformation} = require('./get_useful_information')


const fetchCocktailsByFirstLetter = (firstLetter)=>{
    const req = https.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + firstLetter, getUsefulInformation)
    req.on('error', (err) =>{
        console.log(err)
    })
}

exports.fetchCocktailsByFirstLetter = fetchCocktailsByFirstLetter