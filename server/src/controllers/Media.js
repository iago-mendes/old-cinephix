const knex = require('../knex')
const {base_url} = require('../config/baseUrl')

module.exports = {
    async create(req, res, next)
    {
        try {
            const {name, isMovie, isSeries, isUniverse, classifications_ids} = req.body
            const image = req.file.filename
            await knex('media').insert({name, image, isMovie, isSeries, isUniverse})

            const classifications_id = classifications_ids.split(',').map((id) => Number(id.trim()))
            const media = await knex('media').where({name, image})
            const media_id = media[0].id
            for (let i=0; i < classifications_id.length; i++)
            {
                const classification_id = classifications_id[i]
                await knex('classifications_relations').insert({classification_id, media_id})
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
            const {name, isMovie, isSeries, isUniverse, classifications_ids} = req.body
            await knex('media').where('id', Number(id)).update({name, isMovie, isSeries, isUniverse})

            const classifications_id = classifications_ids.split(',').map((id) => Number(id.trim()))
            await knex('classifications_relations').where('media_id', Number(id)).delete()
            for (let i=0; i < classifications_id.length; i++)
            {
                const classification_id = classifications_id[i]
                await knex('classifications_relations').insert({classification_id, media_id: Number(id)})
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
            await knex('media').where('id', Number(id)).delete()
            await knex('classifications_relations').where('id', Number(id)).delete()
            return res.status(200).send()
        } catch (error) {
            next(error)
        }
    },

    async list(req, res, next)
    {
        try {
            let results = await knex('media')
            results.map(media =>
            {
                media.image = `${base_url}uploads/${media.image}`
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
            
            const media = await knex('media').where({id})
            let {name, image, isMovie, isSeries, isUniverse} = media[0]
            image = `${base_url}uploads/${image}`
            const type = {isMovie, isSeries, isUniverse}

            const classifications_relations = await knex('classifications_relations').where('media_id', Number(id))
            let classifications = []
            for (let i=0; i < classifications_relations.length; i++)
            {
                const {classification_id} = classifications_relations[i]
                const classification = await knex('classifications').where('id', classification_id)
                classifications.push(classification[0])
            }

            const relations = await knex('relations').where('media_id', Number(id))
            let celebrities_characters = []
            for (let i=0; i < relations.length; i++)
            {
                const {celebrity_id, character_id} = relations[i]
                let celebrity = await knex('celebrities').where('id', celebrity_id)
                celebrity[0].image = `${base_url}uploads/${celebrity[0].image}`
                let character = await knex('characters').where('id', character_id)
                character[0].image = `${base_url}uploads/${character[0].image}`
                celebrities_characters.push({celebrity: celebrity[0], character: character[0]})
            }

            return res.json({name, image, type, classifications, celebrities_characters})
        } catch (error) {
            next(error)
        }
    }
}