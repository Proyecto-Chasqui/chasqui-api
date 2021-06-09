// Initializes the `vendedor-tag-producto` service on path `/vendedor-tag-producto`
const { VendedorTagProducto } = require('./vendedor-tag-producto.class');
const createModel = require('../../models/vendedor-tag-producto.model');
const hooks = require('./vendedor-tag-producto.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/vendedor-tag-producto', new VendedorTagProducto(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('vendedor-tag-producto');

  service.hooks(hooks);
};
