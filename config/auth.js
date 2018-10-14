'use strict'

const Env = use('Env')

module.exports = {

  authenticator: 'api',


  session: {
    serializer: 'mongoose',
    model: 'App/Models/User',
    scheme: 'session',
    uid: 'email',
    password: 'password'
  },


  basic: {
    serializer: 'mongoose',
    model: 'App/Models/User',
    scheme: 'basic',
    uid: 'email',
    password: 'password'
  },


  jwt: {
    serializer: 'mongoose',
    model: 'App/Models/User',
    scheme: 'jwt',
    uid: 'email',
    password: 'password',
    options: {
      secret: Env.get('APP_KEY')
    }
  },

  api: {
    serializer: 'mongoose',
    scheme: 'api',
    model: 'App/Models/User',
    token: 'App/Models/Token',
    uid: 'email', // The user identifier. Ej: email, username
    password: 'password', // Password field if using user-password validation
    expiry: '30d', // Not yet implemented
  },
}
