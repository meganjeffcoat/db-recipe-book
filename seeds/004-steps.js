
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { step: 'cook beef'},
        { step: 'sprinkle cheese on sauce'},
        { step: 'place spinach on sauce'},
        { step: 'cut roast in thin slices'},
        { step: 'cook bacon'},
        { step: 'warm leftover meat or veg in skillet'}
      ]);
    });
};
