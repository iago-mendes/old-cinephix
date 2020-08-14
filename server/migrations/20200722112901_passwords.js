exports.up = knex => knex.schema.createTable('passwords', table =>
{
    table.increments('id').unique()
    table.string('name').notNullable()
    table.string('password').notNullable()
})

exports.down = knex => knex.schema.dropTable('passwords')