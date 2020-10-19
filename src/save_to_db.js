const {db} = require('./db')

const saveToDb = async (data)=>{
    try {
        const record = await db.insertMany(data)
        console.log(`created: ${record}`)
    }catch(err){
        console.log(`error: ${err.message}`)
    }
}

exports.saveToDb = saveToDb