let ls = require('./ls')

let files = ls(process.argv[2], process.argv[3], function(err, files) {
    if (err) { console.log("Oooops!") }
    files.forEach(function(file) {
        console.log(file)
    })
})
