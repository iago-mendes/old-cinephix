const knex = require('../knex')

module.exports = {
    async create(req, res, next)
    {
        try {
            const {name, password} = req.body
            await knex('passwords').insert({name, password})
            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },

    async update(req, res, next)
    {
        try {
            const {id} = req.params
            const {name, password} = req.body
            await knex('passwords').where('id', Number(id)).update({name, password})
            return res.status(200).send()
        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next)
    {
        try {
            const {id} = req.params
            await knex('passwords').where('id', Number(id)).delete()
            return res.status(200).send()
        } catch (error) {
            next(error)
        }
    },

    async list(req, res, next)
    {
        try {
            const {ids} = req.query
            const id = ids ? ids.split(',').map(id => Number(id.trim())) : []
            const results = await knex('passwords').whereIn('id', id)
            return res.json(results)            
        } catch (error) {
            next(error)
        }
    }
}