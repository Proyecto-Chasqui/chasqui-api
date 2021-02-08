// Initializes the `clientes` service on path `/clientes`
const { Clientes } = require('./clientes.class');
const createModel = require('../../models/clientes.model');
const hooks = require('./clientes.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/clientes', new Clientes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('clientes');

  service.hooks(hooks);
};
