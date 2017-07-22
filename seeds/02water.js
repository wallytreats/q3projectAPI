
exports.seed = function(knex, Promise) {
  return knex('water').del()
  .then(function () {
    return knex('water').insert([{
      id: 1,
      user_id: 1,
      amount: 10,
      created_at: new Date('2017-07-21 14:26:16 UTC'),
      updated_at: new Date('2017-07-21 14:26:16 UTC')
    },{
      id: 2,
      user_id: 1,
      amount: 10,
      created_at: new Date('2017-07-21 14:36:16 UTC'),
      updated_at: new Date('2017-07-21 14:36:16 UTC')
    },{
      id: 3,
      user_id: 1,
      amount: 5,
      created_at: new Date('2017-07-21 14:46:16 UTC'),
      updated_at: new Date('2017-07-21 14:46:16 UTC')
    },{
      id: 4,
      user_id: 1,
      amount: 5,
      created_at: new Date('2017-07-21 14:56:16 UTC'),
      updated_at: new Date('2017-07-21 14:56:16 UTC')
    },{
      id: 5,
      user_id: 1,
      amount: 15,
      created_at: new Date('2017-07-21 15:06:16 UTC'),
      updated_at: new Date('2017-07-21 15:06:16 UTC')
    }
    ]);
  }).then(function(){
    return knex.raw("SELECT setval('water_id_seq', (SELECT MAX(id) FROM water));");
  });
};
