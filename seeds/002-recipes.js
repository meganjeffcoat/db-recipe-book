
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "Traditional Tacos", dish_id: 2 },
        { name: "Fridge Tacos", dish_id: 2 },
        { name: "Pepperoni Pizza", dish_id: 1 },
        { name: "White Pizza", dish_id: 1 },
        { name: "French Dip", dish_id: 3 },
        { name: "BLT", dish_id: 3 }
      ]);
    });
};
