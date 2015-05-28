var path = require('path')
var express = require('express')

var app = express()
var static_path = path.join(__dirname, './../build')

app.route('/').get(function (req, res) {
  res.sendFile('index.html', { root: static_path })
})

app.use('/', express.static(static_path, {
  maxage: 31557600
}))

var server = app.listen(process.env.PORT || 5000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Listening at http://%s:%s', host, port)
})
