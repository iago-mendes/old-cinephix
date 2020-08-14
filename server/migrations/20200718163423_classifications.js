exports.up = knex => knex.schema.createTable('classifications', table =>
{
    table.increments('id').unique()
    table.string('name').notNullable()
})

exports.down = knex => knex.schema.dropTable('classifications')