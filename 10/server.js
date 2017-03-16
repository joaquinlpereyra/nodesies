let utils = require('../utils')
let net = require('net')


let server = net.createServer( (socket) => {
    let date = new Date()
    let year = date.getFullYear()
    let month = (date.getMonth() + 1 < 10) ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
    let day = date.getDate()
    let hour = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours()
    let minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()
    let answer = year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + '\n'
    console.log(answer)
    socket.end(answer)
})


let port = utils.getFirstArg()
server.listen(port)
