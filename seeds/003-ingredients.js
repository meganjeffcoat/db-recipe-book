
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "tortillas" },
        { name: "ground beef" },
        { name: "tomatoes" },
        { name: "cheese" },
        { name: "spinach" },
        { name: "roast" },
        { name: "bacon" },
        { name: "left over meat in the fridge" }
      ]);
    });
};
