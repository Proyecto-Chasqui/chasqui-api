// Initializes the `vendedor-retiro-zonas` service on path `/vendedor-retiro-zonas`
const { VendedorRetiroZonas } = require('./vendedor-retiro-zonas.class');
const createModel = require('../../models/vendedor-retiro-zonas.model');
const hooks = require('./vendedor-retiro-zonas.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/vendedor-retiro-zonas', new VendedorRetiroZonas(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('vendedor-retiro-zonas');

  service.hooks(hooks);
};
