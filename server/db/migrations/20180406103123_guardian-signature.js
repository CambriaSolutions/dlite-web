
exports.up = function(db, Promise) {
  db.schema.createTable('guardian_signature', function(table) {
    table.string('application_id');
    table.string('is_signed');
    table.boolean('guardian_0');
    table.string('guardian_0_name');
    table.string('guardian_0_date');
    table.string('guardian_0_phone');
    table.string('guardian_0_address_1');
    table.string('guardian_0_address_2');
    table.string('guardian_0_address_city');
    table.string('guardian_0_address_zip');
    table.boolean('guardian_1');
    table.string('guardian_1_name');
    table.string('guardian_1_date');
    table.string('guardian_1_phone');
    table.string('guardian_1_address_1');
    table.string('guardian_1_address_2');
    table.string('guardian_1_address_city');
    table.string('guardian_1_address_state');
    table.string('guardian_1_address_zip');
  });
};

exports.down = function(db, Promise) {
  db.schema.dropTable('guardian_signature');
};
