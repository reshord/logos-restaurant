const express = require('express')
const cors = require('cors')
const db = require('./src/products.json')
const dbProdAdvice = require('./src/productsAdvice.json')
const mongoose = require('mongoose')
const fs = require('fs')
const {register} = require('./src/Controllers/register')
const {login} = require('./src/Controllers/login')

mongoose.connect(
    process.env.MONGODB_URI
).then(() => {
    app.listen(process.env.PORT || 4444, () => {
        return console.log(`server has been started on ${port}`);
    })
})

const app = express()

app.use(express.json())
app.use(cors())

const port = 4444

app.get('/', (req, res) => {
    return res.json(db)
})

app.get('/cart', (req, res) => {
    return res.json(dbProdAdvice)
})

app.post('/auth/register', register)
app.post('/auth/login', login)





