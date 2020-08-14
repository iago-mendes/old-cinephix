const knex = require('../knex')
const {base_url} = require('../config/baseUrl')

module.exports = {
    async create(req, res, next)
    {
        try {
            const {name, characters_ids, medias_ids} = req.body
            const image = req.file.filename
            await knex('celebrities').insert({name, image})
            
            const characters_id = characters_ids.split(',').map(id => Number(id.trim()))
            const medias_id = medias_ids.split(',').map(id => Number(id.trim()))
            const celebrity = await knex('celebrities').where({name: name, image: image})
            const celebrity_id = celebrity[0].id
            for (let i=0; i < characters_id.length; i++)
            {
                const character_id = characters_id[i]
                const media_id = medias_id[i]
                await knex('relations').insert({celebrity_id, character_id, media_id})
            }

            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },

    async update(req, res, next)
    {
        try {
            const {id} = req.params
            const {name, characters_ids, medias_ids} = req.body
            await knex('celebrities').where('id', Number(id)).update({name})
            
            const characters_id = characters_ids.split(',').map(id => Number(id.trim()))
            const medias_id = medias_ids.split(',').map(id => Number(id.trim()))
            const celebrity_id = id
            await knex('relations').where('celebrity_id', celebrity_id).delete()
            for (let i=0; i < characters_id.length; i++)
            {
                const character_id = characters_id[i]
                const media_id = medias_id[i]
                await knex('relations').insert({celebrity_id, character_id, media_id})
            }

            return res.status(200).send()
        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next)
    {
        try {
            const {id} = req.params
            await knex('celebrities').where('id', Number(id)).delete()
            await knex('relations').where('celebrity_id', Number(id)).delete()
            return res.status(200).send()
        } catch (error) {
            next(error)
        }
    },

    async list(req, res, next)
    {
        try {
            let results = await knex('celebrities')
            results.map(celebrity =>
            {
                celebrity.image = `${base_url}uploads/${celebrity.image}`
            })
            return res.json(results)
            //return res.json(base_url)
        } catch (error) {
            next(error)
        }
    },

    async show(req, res, next)
    {
        try {
            const {id} = req.params
            
            const celebrity = await knex('celebrities').where('id', Number(id))
            let {name, image} = celebrity[0]
            image = `${base_url}uploads/${image}`

            const relations = await knex('relations').where('celebrity_id', Number(id))
            let characters_media = []
            for (let i=0; i < relations.length; i++)
            {
                const {character_id, media_id} = relations[i]
                let character = await knex('characters').where('id', character_id)
                character[0].image = `${base_url}uploads/${character[0].image}`
                let media = await knex('media').where('id', media_id).select('id', 'name', 'image')
                media[0].image = `${base_url}uploads/${media[0].image}`
                characters_media.push({character: character[0], media: media[0]})
            }

            return res.json({name, image, characters_media})
        } catch (error) {
            next(error)
        }
    }
}