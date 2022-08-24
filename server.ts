const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.cors())

app.get('/' , () => {
})

app.listen(4444, () => {
    console.log('server has been started');
})

