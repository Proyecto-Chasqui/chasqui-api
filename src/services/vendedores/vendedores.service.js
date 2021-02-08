// Initializes the `vendedores` service on path `/vendedores`
const { Vendedores } = require('./vendedores.class');
const createModel = require('../../models/vendedores.model');
const hooks = require('./vendedores.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/vendedores', new Vendedores(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('vendedores');

  service.hooks(hooks);
};
