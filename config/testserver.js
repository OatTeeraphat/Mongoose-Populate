// set up ======================================================================
// required for node function
var util = require('util')

// set value ===================================================================
// localhost value for test @global server
var config = {
  host: {
    PORT : '80',
    frontend: '104.199.176.202',
    backend: '104.199.171.234',

    frontendInternal: '10.140.0.3',
    backendInternal: '10.140.0.2'
  },
  db: {
    user: 'admin',
    pwd: 'qwer1234!',
    port: 27017,
    name: 'admin'
  }
}

//return mongo format form config
config.db.host = util.format(
  'mongodb://%s:%s@%s:%s/%s',
  config.db.user,
  config.db.pwd,
  config.host.backendInternal,
  config.db.port,
  config.db.name
)

module.exports = config