var express = require('express')
const fs = require('fs');

var html = ""
var output = ""


fs.readFile('./index.html', (err, data) => {
    if (err) {
        console.log("err")
        throw err
    }

    html = data.toString()
})


const app = express()

app.use(express.urlencoded({
  extended: true
}))

app.get('/', (req, res) => {
    res.writeHeader(200, {"Content-Type": "text/html"})
    res.write(template(html, output))
})

app.post('/', (req, res) => {
    res.writeHeader(200, {"Content-Type": "text/html"})
    res.write(template(html,find(req.body.fn)))
})

function find(fn) {
    switch (fn) {
    case '1':
        return "wrong"
    case '2':
        return "correct : Kanchenjunga"
    case '3':
        return "wrong"
    case '4':
        return "wrong"
    }
}


function template(html, output, x, y) {
     return html.replace('{{OUTPUT}}', output)
            
}

app.listen(3000)
