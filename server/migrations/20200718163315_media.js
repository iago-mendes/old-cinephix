exports.up = knex => knex.schema.createTable('media', table =>
{
    table.increments('id').unique()
    table.string('name').notNullable()
    table.string('image').notNullable()
    table.boolean('isMovie').notNullable()
    table.boolean('isSeries').notNullable()
    table.boolean('isUniverse').notNullable()
})

exports.down = knex => knex.schema.dropTable('media')