const dict = require('./dictionary.json')
const dMap = new Map()

dict.forEach(w =>{

    dMap.set(w.word, w.translations.en)
})
console.log(dMap)