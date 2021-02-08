// Initializes the `productos-variantes` service on path `/productos-variantes`
const { ProductosVariantes } = require('./productos-variantes.class');
const createModel = require('../../models/productos-variantes.model');
const hooks = require('./productos-variantes.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/productos-variantes', new ProductosVariantes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('productos-variantes');

  service.hooks(hooks);
};
