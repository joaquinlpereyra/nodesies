let fs = require('fs')

fs.readdir(process.argv[2], function(err, data) {
    if (err) { console.log("Oooops!") }

    let ext = process.argv[3]
    let filtered_files = data.filter((file) => file.endsWith('.' + ext))
    filtered_files.forEach(function(file) {
        console.log(file)
    })
})
