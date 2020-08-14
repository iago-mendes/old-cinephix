const knex = require('../knex')
const {base_url} = require('../config/baseUrl')

module.exports = {
    async create(req, res, next)
    {
        try {
            const {name} = req.body
            const image = req.file.filename
            await knex('characters').insert({name, image})
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
            await knex('characters').where('id', Number(id)).update({name})
            return res.status(200).send()
        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next)
    {
        try {
            const {id} = req.params
            await knex('characters').where('id', Number(id)).delete()
            return res.status(200).send()
        } catch (error) {
            next(error)
        }
    },

    async list(req, res, next)
    {
        try {
            let results = await knex('characters')
            results.map(character =>
            {
                character.image = `${base_url}uploads/${character.image}`
            })
            return res.json(results)
        } catch (error) {
            next(error)
        }
    },

    async show(req, res, next)
    {
        try {
            const {id} = req.params

            const character = await knex('characters').where('id', Number(id))
            let {name, image} = character[0]
            image = `${base_url}uploads/${image}`

            const relations = await knex('relations').where('character_id', Number(id))
            let celebrities_media = []
            for (let i=0; i < relations.length; i++)
            {
                const {celebrity_id, media_id} = relations[i]
                let celebrity = await knex('celebrities').where('id', celebrity_id)
                celebrity[0].image = `${base_url}uploads/${celebrity[0].image}`
                let media = await knex('media').where('id', media_id).select('id', 'name', 'image')
                media[0].image = `${base_url}uploads/${media[0].image}`
                celebrities_media.push({celebrity: celebrity[0], media: media[0]})
            }

            return res.json({name, image, celebrities_media})
        } catch (error) {
            next(error)
        }
    }
}