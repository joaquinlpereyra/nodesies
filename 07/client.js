let utils = require('../utils')
let http = require('http')

let url = utils.getArg(0)
http.get(url, (response) => {
    response.setEncoding('utf8')
    response.on('data', (res) => {console.log(res)})
})
