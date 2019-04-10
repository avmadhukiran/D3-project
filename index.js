const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.sendFile(__dirname+'/public/index.html')
})

app.get('/week', db.getProductsbyweek)

app.get('/day', db.getProductsbyday)


app.listen(3000, () => {
    console.log(`App running on port 3000.`)
  })