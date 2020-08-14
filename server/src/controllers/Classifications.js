const knex = require('../knex')

module.exports = {
    async create(req, res, next)
    {
        try {
            const {name} = req.body
            await knex('classifications').insert({name})
            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },

    async update(req, res, next)
    {
        try {
            const {id} = req.params
            const {name} = req.body
            await knex('classifications').where('id', Number(id)).update({name})
            return res.status(200).send()
        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next)
    {
        try {
            const {id} = req.params
            await knex('classifications').where('id', Number(id)).delete()
            return res.status(200).send()
        } catch (error) {
            next(error)
        }
    },

    async list(req, res, next)
    {
        try {
            const results = await knex('classifications')
            return res.json(results)
        } catch (error) {
            next(error)
        }
    }
}