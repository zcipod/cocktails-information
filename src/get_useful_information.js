const {saveToDb} = require('./save_to_db')


const getUsefulInformation = (res)=>{
    res.setEncoding('utf8')
    let data = ""
    res.on('data',(chunk)=>{
        data += chunk
    })
    res.on('end',()=>{
        const dataObj = JSON.parse(data)
        if(dataObj.drinks) { //in case of non-data
            const selectFields = dataObj.drinks.map(item => {
                return {'strDrink': item['strDrink'], 'strInstructions': item['strInstructions']}
            })
            selectFields.map(saveToDb)
        }
    })
}

exports.getUsefulInformation = getUsefulInformation