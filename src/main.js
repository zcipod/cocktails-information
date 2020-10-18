const {fetchCocktailsByFirstLetter} = require('./fetch_cocktails_by_first_letter')

const main = ()=>{
    for (let i = 0; i < 26; i++) {
        fetchCocktailsByFirstLetter(String.fromCharCode(97 + i))
    }
}

main()
