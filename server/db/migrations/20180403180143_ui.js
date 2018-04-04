'use strict';

exports.up = function(db, Promise) {
  return db.schema.createTable('ui', function(table) {
    table.increments('id').primary();
    table.string('pathname');
    table.string('application_id')
  });
};

exports.down = function(db, Promise) {
  return db.schema.dropTable('ui');
};
