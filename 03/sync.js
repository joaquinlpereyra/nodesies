let fs = require('fs')

let path = process.argv[2]
if (path === undefined) {
    console.log("No path given!")
    process.exit(1)
}

let file_contents = fs.readFileSync(path)
let lines = file_contents.toString().split('\n')
let amount_of_new_lines = lines.length - 1
console.log(amount_of_new_lines)
