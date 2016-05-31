exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table){
    table.increments();
    table.string('title');
    table.date('date');
    table.string('post');
    table.string('description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
