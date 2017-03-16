let utils = require('../utils')
let http = require('http')

class Request {
    constructor(url) {
        this.url = url
        this.data = ''
        this.finished = false
    }

    addData(newData) {
        this.data += newData
    }
}

let requests = [new Request(utils.getArg(0)), 
                new Request(utils.getArg(1)),
                new Request(utils.getArg(2))]

requests.forEach(req => {
    http.get(req.url, res => {
        res.setEncoding('utf8')
        res.on('data', data => req.addData(data))
        res.on('end', () => {
            req.finished = true
            if (requests[0].finished && requests[1].finished && requests[2].finished) {
                requests.forEach( req => {
                    console.log(req.data)
                })
            }
        })
    })
})
