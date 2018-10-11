'use strict'

const Env = use('Env')

module.exports = {

  name: Env.get('APP_NAME', 'AdonisJs'),

  appKey: Env.get('APP_KEY'),

  http: {

    allowMethodSpoofing: false,

    trustProxy: false,

    subdomainOffset: 2,

    jsonpCallback: 'callback',

    etag: false
  },

  static: {

    dotfiles: 'ignore',

    /*
    |--------------------------------------------------------------------------
    | ETag
    |--------------------------------------------------------------------------
    |
    | Enable or disable etag generation
    |
    */
    etag: true,

    /*
    |--------------------------------------------------------------------------
    | Extensions
    |--------------------------------------------------------------------------
    |
    | Set file extension fallbacks. When set, if a file is not found, the given
    | extensions will be added to the file name and search for. The first
    | that exists will be served. Example: ['html', 'htm'].
    |
    */
    extensions: false
  },

  locales: {
    /*
    |--------------------------------------------------------------------------
    | Loader
    |--------------------------------------------------------------------------
    |
    | The loader to be used for fetching and updating locales. Below is the
    | list of available options.
    |
    | file, database
    |
    */
    loader: 'file',

    /*
    |--------------------------------------------------------------------------
    | Default Locale
    |--------------------------------------------------------------------------
    |
    | Default locale to be used by Antl provider. You can always switch drivers
    | in runtime or use the official Antl middleware to detect the driver
    | based on HTTP headers/query string.
    |
    */
    locale: 'en'
  },

  logger: {
    /*
    |--------------------------------------------------------------------------
    | Transport
    |--------------------------------------------------------------------------
    |
    | Transport to be used for logging messages. You can have multiple
    | transports using same driver.
    |
    | Available drivers are: `file` and `console`.
    |
    */
    transport: 'console',

    /*
    |--------------------------------------------------------------------------
    | Console Transport
    |--------------------------------------------------------------------------
    |
    | Using `console` driver for logging. This driver writes to `stdout`
    | and `stderr`
    |
    */
    console: {
      driver: 'console',
      name: 'adonis-app',
      level: 'info'
    },

    /*
    |--------------------------------------------------------------------------
    | File Transport
    |--------------------------------------------------------------------------
    |
    | File transport uses file driver and writes log messages for a given
    | file inside `tmp` directory for your app.
    |
    | For a different directory, set an absolute path for the filename.
    |
    */
    file: {
      driver: 'file',
      name: 'adonis-app',
      filename: 'adonis.log',
      level: 'info'
    }
  }
}
