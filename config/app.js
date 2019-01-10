const Env = use('Env');

module.exports = {
  name: Env.get('APP_NAME', 'AdonisJs'),

  appKey: Env.get('APP_KEY'),

  http: {
    allowMethodSpoofing: false,

    trustProxy: false,

    subdomainOffset: 2,

    jsonpCallback: 'callback',

    etag: false,
  },

  static: {
    dotfiles: 'ignore',

    etag: true,

    extensions: false,
  },

  locales: {

    loader: 'file',

    locale: 'en',
  },

  logger: {

    transport: 'console',

    console: {
      driver: 'console',
      name: 'adonis-app',
      level: 'info',
    },

    file: {
      driver: 'file',
      name: 'adonis-app',
      filename: 'adonis.log',
      level: 'info',
    },
  },
};
