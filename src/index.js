const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { log } = require('console')
const handlebars = require('express-handlebars').engine
const app = express()
const port = 3000

const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public')))

app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json())

// HTTP logger
// app.use(morgan('combined'))

// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    })
)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))
// console.log('PATH: ', path.join(__dirname, 'resources/views'));

// Route init
route(app)

// 127.0.0.1 - localhost
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
// https://www.google.com/search?q=f8 lap trinh&ref=f8&author=phonglb
