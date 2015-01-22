var Promise = require('promise-polyfill')

module.exports = function (stream, cb) {
    cb = cb || function () {}
    var str = ''

    return new Promise (function (resolve, reject) {
        stream.on('data', function (data) {
            str += data.toString()
        })
        stream.on('end', function () {
            resolve(str)
            cb(null, str)
        })
        stream.on('error', function (err) {
            reject(err)
            cb(err)
        })
    })
}
