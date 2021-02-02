exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("listings").then(function () {
    // Inserts seed entries
    return knex("listings").insert([
      {
        listing_name: "Tasty Fuji Apples",
        listing_description: "Extremely delicious Fujo Apples",
        listing_price: 10,
        marketplace_id: 1,
        user_id: 2,
      },
      {
        listing_name: "Coffee from Sam's house",
        listing_description: "It was a Christmas gift",
        listing_price: 5,
        marketplace_id: 1,
        user_id: 1,
      },
      {
        listing_name: "Bistro Steak",
        listing_description:
          "This probably wouldn't be found at the marketplace",
        listing_price: 14,
        marketplace_id: 1,
        user_id: 2,
      },
      {
        listing_name: "Another creative idea",
        listing_description: "We're fresh out of these.",
        listing_price: 8,
        marketplace_id: 1,
        user_id: 2,
      },
    ]);
  });
};
