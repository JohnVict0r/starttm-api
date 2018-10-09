'use strict'

const Env = use('Env')
const Helpers = use('Helpers')

module.exports = {

  connection: Env.get('DB_CONNECTION', 'mongodb'),

  mongodb: {
    client: 'mongodb',
    connectionString: Env.get('MONGO_CONNECTION_STRING', null),
    connection: {
      host: Env.get('MONGO_HOST', 'localhost'),
      port: Env.get('MONGO_PORT', 27017),
      user: Env.get('MONGO_USER', 'admin'),
      pass: Env.get('MONGO_PASSWORD', ''),
      database: Env.get('MONGO_DATABASE', 'adonis'),
      options: {
        // All options can be found at http://mongoosejs.com/docs/connections.html
      },
      debug: false
    }
  }
}
