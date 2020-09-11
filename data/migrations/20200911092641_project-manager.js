
exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
        tbl.increments();
        tbl.string('name', 250).notNullable().index().unique();
        tbl.string('description', 300);
        tbl.boolean('completed');
    })
    .createTable("resources", tbl => {
        tbl.increments();
        tbl.string('name', 250).notNullable().index().unique();
        tbl.string('description')
    })
    .createTable("tasks", tbl => {
        tbl.increments();
        tbl.string('description', 400).notNullable();
        tbl.string('notes', 400);
        tbl.boolean('completed');
    })
};

exports.down = function(knex) {
  return knex.schema
        .dropTableIfExists("tasks")
        .dropTableIfExists("resources")
        .dropTableIfExists("projects");
};
