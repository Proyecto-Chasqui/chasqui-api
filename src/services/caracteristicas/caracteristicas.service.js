// Initializes the `caracteristicas` service on path `/caracteristicas`
const { Caracteristicas } = require('./caracteristicas.class');
const createModel = require('../../models/caracteristicas.model');
const hooks = require('./caracteristicas.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/caracteristicas', new Caracteristicas(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('caracteristicas');

  service.hooks(hooks);
};
