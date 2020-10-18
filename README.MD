### Cocktails Information fetch tool

#### Task

This tool is used to fetch cocktails information from [TheCocktailDb](https://www.thecocktaildb.com), by using the following API ([*List all cocktails by first letter*](https://www.thecocktaildb.com/api.php)):

```html
https://www.thecocktaildb.com/api/json/v1/1/search.php?{f:LETTER}
```

#### Fields to save

Only "strDrink" and "strInstructions" are saved by the tool.

#### Database

The results will be saved into [MongoDB Atlas](https://cloud.mongodb.com/).

#### How to use

```bash
node src/main.js
```

