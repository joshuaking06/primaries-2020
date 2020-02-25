require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./config/routes')

const app = express()

app.use(express.static(`${__dirname}/dist`))

mongoose.connect(process.env.MONGODB_URI)

app.use(bodyParser.json())

app.use('/api', routes)
app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))

app.listen(process.env.PORT, () => console.log(`express running on ${process.env.PORT}`))
