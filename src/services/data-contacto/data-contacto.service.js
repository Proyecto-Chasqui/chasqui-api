// Initializes the `data-contacto` service on path `/data-contacto`
const { DataContacto } = require('./data-contacto.class');
const createModel = require('../../models/data-contacto.model');
const hooks = require('./data-contacto.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/data-contacto', new DataContacto(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('data-contacto');

  service.hooks(hooks);
};
