// Initializes the `pedidos-colectivos` service on path `/pedidos-colectivos`
const { PedidosColectivos } = require('./pedidos-colectivos.class');
const createModel = require('../../models/pedidos-colectivos.model');
const hooks = require('./pedidos-colectivos.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/pedidos-colectivos', new PedidosColectivos(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('pedidos-colectivos');

  service.hooks(hooks);
};
