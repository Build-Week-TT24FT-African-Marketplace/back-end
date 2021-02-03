exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("marketplaces").then(function () {
    // Inserts seed entries
    return knex("marketplaces").insert([
      { marketplace_name: "Ghana" },
      { marketplace_name: "Tanzania" },
      { marketplace_name: "Senegal" },
    ]);
  });
};
