
exports.seed = function(knex, Promise) {
  return knex('users')
  .del()
    .then(function () {
      return knex('users').insert([{
        id: 1,
        first_name: 'Test',
        last_name: 'Test',
        email: 'test@test.com',
        hashed_password: '$2a$08$C/HmTJ0yIpUBbMYN9HIB0eeu5QU1uuOx4YgNlB5aOBSMlbP0Kn2PK',
        phone:1234567891
      }
      ]);
    }).then(function(){
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));");
    });
};
