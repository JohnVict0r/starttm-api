'use strict'

/*
|--------------------------------------------------------------------------
| Providers
|--------------------------------------------------------------------------
|
| Providers are building blocks for your Adonis app. Anytime you install
| a new Adonis specific package, chances are you will register the
| provider here.
|
*/
const providers = [
  '@adonisjs/framework/providers/AppProvider',
  '@adonisjs/auth/providers/AuthProvider',
  '@adonisjs/bodyparser/providers/BodyParserProvider',
  '@adonisjs/cors/providers/CorsProvider',
  '@adonisjs/lucid/providers/LucidProvider',
  'adonis-mongoose-model/providers/MongooseProvider',
  '@adonisjs/mail/providers/MailProvider',
  '@adonisjs/validator/providers/ValidatorProvider',
  '@adonisjs/framework/providers/ViewProvider'
]

const aceProviders = [
  '@adonisjs/lucid/providers/MigrationsProvider'
]


const aliases = {}


const commands = []

module.exports = { providers, aceProviders, aliases, commands }
