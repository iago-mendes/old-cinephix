const express = require('express')
const path = require('path')
const cors = require('cors')

const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(routes)
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use((error, req, res, next) =>
{
    res.status(error.status || 500)
    res.json({error: error.message})
})

app.listen(1712, () => console.log('server is running'))