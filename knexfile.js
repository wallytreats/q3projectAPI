
module.exports = {

  development: {
    client: 'pg',
    connection:'postgres://localhost/water'
  },
  production:{
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
