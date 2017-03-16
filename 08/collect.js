let utils = require('../utils')
let http = require('http')

http.get(utils.getArg(0), (res) => {
    res.setEncoding('utf8')
    let datas_size = 0
    let datas = ''
    data_collector = []

    res.on('data', (data) => { data_collector.push(data) })
    res.on('end', () => {
        data_collector.forEach((data) => {
            datas_size += data.length
            datas += data
        })
        console.log(datas_size)
        console.log(datas)
    })
})
