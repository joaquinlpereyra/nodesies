let utils = require('../utils.js')
let fs = require('fs')

let path = utils.getFirstArg()

fs.readFile(path, function(err, data) {
    if (err) { throw err }

    let line_amount = data.toString().split('\n').length - 1
    console.log(line_amount)
})


