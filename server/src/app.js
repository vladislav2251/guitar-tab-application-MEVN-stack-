/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */
const express = require('express')
const boryParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(boryParser.json())
app.use(cors())

app.get('/status', (req, res) => {
    res.send({
        message: "hello"
    })
})

app.listen(process.env.PORT || 8081)
