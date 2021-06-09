// Initializes the `vendedor-estrategia` service on path `/vendedor-estrategia`
const { VendedorEstrategia } = require('./vendedor-estrategia.class');
const createModel = require('../../models/vendedor-estrategia.model');
const hooks = require('./vendedor-estrategia.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/vendedor-estrategia', new VendedorEstrategia(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('vendedor-estrategia');

  service.hooks(hooks);
};
