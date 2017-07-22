
exports.up = function(knex, Promise) {
  return knex.schema.createTable("water", function (table) {
    table.increments('id');
    table.integer('user_id').index().references('users.id').notNullable().onDelete('cascade');
    table.integer('amount');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("water");
};
