let fs = require('fs')

module.exports = function(dirName, extension, callback) {
    fs.readdir(dirName, function(err, files) {
        if (err) { return callback(err) }
        let filtered_files = files.filter((file) => file.endsWith('.' + extension))
        callback(null, filtered_files)
    })
}
