const providers = [
  '@adonisjs/framework/providers/AppProvider',
  '@adonisjs/auth/providers/AuthProvider',
  '@adonisjs/bodyparser/providers/BodyParserProvider',
  '@adonisjs/cors/providers/CorsProvider',
  '@adonisjs/lucid/providers/LucidProvider',
  'adonis-mongoose-model/providers/MongooseProvider',
  '@adonisjs/mail/providers/MailProvider',
  '@adonisjs/validator/providers/ValidatorProvider',
  '@adonisjs/framework/providers/ViewProvider',
  '@adonisjs/antl/providers/AntlProvider',
  'adonis-acl/providers/AclProvider',
];

const aceProviders = [
  '@adonisjs/lucid/providers/MigrationsProvider',
  'adonis-acl/providers/CommandsProvider',
];

const aliases = { Role: 'Adonis/Acl/Role', Permission: 'Adonis/Acl/Permission' };

const commands = [];

module.exports = {
  providers,
  aceProviders,
  aliases,
  commands,
};
