// Initializes the `vendedor-retiro-puntos` service on path `/vendedor-retiro-puntos`
const { VendedorRetiroPuntos } = require('./vendedor-retiro-puntos.class');
const createModel = require('../../models/vendedor-retiro-puntos.model');
const hooks = require('./vendedor-retiro-puntos.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/vendedor-retiro-puntos', new VendedorRetiroPuntos(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('vendedor-retiro-puntos');

  service.hooks(hooks);
};
