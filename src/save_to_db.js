const {db} = require('./db')

const saveToDb = async (data)=>{
    try {
        const record = await db.create({
            strDrink: data.strDrink,
            strInstructions: data.strInstructions
        })
        console.log(`created: ${record}`)
    }catch(err){
        console.log(`error: ${err.message}`)
    }
}

exports.saveToDb = saveToDb