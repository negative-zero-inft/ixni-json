const dict = require('./dictionary.json')
const dMap = new Map()

dict.forEach(w =>{

    dMap.set(w.w, w.t.en)
})
console.log(dMap)