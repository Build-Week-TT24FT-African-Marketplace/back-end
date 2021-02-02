exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("marketplaces").then(function () {
    // Inserts seed entries
    return knex("marketplaces").insert([
      { marketplace_name: "Kenya" },
      { marketplace_name: "Rwanda" },
      { marketplace_name: "South Africa" },
    ]);
  });
};
