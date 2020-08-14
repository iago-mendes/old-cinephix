const express = require('express')
const multer = require('multer')
//const {celebrate, Joi} = require('celebrate')

const knex = require('./knex')
const multerConfig = require('./config/multer')

const routes = express.Router()
const upload = multer(multerConfig)

const Celebrities = require('./controllers/Celebrities')
const Characters = require('./controllers/Characters')
const Media = require('./controllers/Media')
const Classifications = require('./controllers/Classifications')
const Passwords = require('./controllers/Passwords')

routes.post('/celebrities', upload.single('image'), Celebrities.create)
routes.put('/celebrities/:id', Celebrities.update)
routes.delete('/celebrities/:id', Celebrities.delete)
routes.get('/celebrities', Celebrities.list)
routes.get('/celebrities/:id', Celebrities.show)

routes.post('/characters', upload.single('image'), Characters.create)
routes.put('/characters/:id', Characters.update)
routes.delete('/characters/:id', Characters.delete)
routes.get('/characters', Characters.list)
routes.get('/characters/:id', Characters.show)

routes.post('/media', upload.single('image'), Media.create)
routes.put('/media/:id', Media.update)
routes.delete('/media/:id', Media.delete)
routes.get('/media', Media.list)
routes.get('/media/:id', Media.show)

routes.post('/classifications', Classifications.create)
routes.put('/classifications/:id', Classifications.update)
routes.delete('/classifications/:id', Classifications.delete)
routes.get('/classifications', Classifications.list)

routes.post('/passwords', Passwords.create)
routes.put('/passwords/:id', Passwords.update)
routes.delete('/passwords/:id', Passwords.delete)
routes.get('/passwords', Passwords.list)

routes.get('/relations', async (req, res, next) =>
{
    try {
        const results = await knex('relations')
        return res.json(results)
    } catch (error) {
        next(error)
    }
})
routes.get('/classifications_relations', async (req, res, next) =>
{
    try {
        const results = await knex('classifications_relations')
        return res.json(results)
    } catch (error) {
        next(error)
    }
})

module.exports = routes