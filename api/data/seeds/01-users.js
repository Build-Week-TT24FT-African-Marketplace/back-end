exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users").then(function () {
    // Inserts seed entries
    return knex("users").insert([
      {
        user_first_name: "Sam",
        user_email: "sam@samsemail.com",
        user_password: "banana",
        role: 1,
      },
      {
        user_first_name: "Niki",
        user_email: "niki@nikisemail.com",
        user_password: "banana",
        role: 1,
      },
      {
        user_first_name: "Rob",
        user_email: "rob@robsemail.com",
        user_password: "banana",
        role: 1,
      },
      {
        user_first_name: "Wei",
        user_email: "wei@weisemail.com",
        user_password: "banana",
        role: 1,
      },
    ]);
  });
};
