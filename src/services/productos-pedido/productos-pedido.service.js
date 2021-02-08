// Initializes the `productos-pedido` service on path `/productos-pedido`
const { ProductosPedido } = require('./productos-pedido.class');
const createModel = require('../../models/productos-pedido.model');
const hooks = require('./productos-pedido.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/productos-pedido', new ProductosPedido(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('productos-pedido');

  service.hooks(hooks);
};
