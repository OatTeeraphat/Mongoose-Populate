// set up ======================================================================
// required for node function
var util = require('util')

// set value ===================================================================
// localhost value for test @local server
var config = {
  host: {
    PORT : '80',
    frontend: 'localhost',
    backend: 'localhost',

    frontendInternal: 'localhost',
    backendInternal: 'localhost'
  },
  db: {
    port: 27017,
    name: 'test_mongoose'
  }
}

//return mongo format form config
config.db.host = util.format(
  'mongodb://%s/%s',
  config.host.backendInternal,
  config.db.name
)

module.exports = config