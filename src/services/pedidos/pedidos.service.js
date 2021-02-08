// Initializes the `pedidos` service on path `/pedidos`
const { Pedidos } = require('./pedidos.class');
const createModel = require('../../models/pedidos.model');
const hooks = require('./pedidos.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/pedidos', new Pedidos(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('pedidos');

  service.hooks(hooks);
};
