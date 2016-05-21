
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/tech_blog'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};
