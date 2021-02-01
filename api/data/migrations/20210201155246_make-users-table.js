exports.up = function (knex) {
  return knex.schema
    .createTable("users", () => {
      table.increments("user_id");
      table.string("user_first_name").notNullable();
      table.string("user_email").notNullable().unique();
      table.string("user_password").notNullable();
      table.integer("role");
    })

    .createTable("listings", () => {
      table.increments("listing_id");
      table.string("listing_name").notNullable();
      table.string("listing_description").notNullable();
      table.integer("listing_price").notNullable();
      table.integer("marketplace_id").notNullable();
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onDelete("CASCADE");
    })

    .createTable("marketplaces", () => {
      table.increments("marketplace_id");
      table.string("marketplace_name");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("listings")
    .dropTableIfExists("marketplaces");
};
