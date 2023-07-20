/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        { name: 'test1', email: 'test1@test1' },
        { name: 'test2', email: 'test2@test2' },
        { name: 'test3', email: 'test3@test3' },
      ]);
    });
};
