exports.up = knex => knex.schema.createTable('classifications_relations', table =>
{
    table.increments('id').unique()
    table.integer('classification_id').notNullable()
    table.integer('media_id').notNullable()
})

exports.down = knex => knex.schema.dropTable('classifications_relations')