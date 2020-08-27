exports.up = knex => knex.schema.createTable('celebrities', table =>
{
    table.increments('id').unique()
    table.string('name').notNullable()
    table.string('image').notNullable()
})

exports.down = knex => knex.schema.dropTable('celebrities')