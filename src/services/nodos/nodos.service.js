// Initializes the `nodos` service on path `/nodos`
const { Nodos } = require('./nodos.class');
const createModel = require('../../models/nodos.model');
const hooks = require('./nodos.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/nodos', new Nodos(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('nodos');

  service.hooks(hooks);
};
