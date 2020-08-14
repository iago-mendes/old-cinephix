exports.up = knex => knex.schema.createTable('relations', table =>
{
    table.increments('id').unique()
    table.integer('celebrity_id').notNullable()
    table.integer('character_id').notNullable()
    table.integer('media_id').notNullable()
})

exports.down = knex => knex.schema.dropTable('relations')