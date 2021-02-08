// Initializes the `direcciones` service on path `/direcciones`
const { Direcciones } = require('./direcciones.class');
const createModel = require('../../models/direcciones.model');
const hooks = require('./direcciones.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/direcciones', new Direcciones(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('direcciones');

  service.hooks(hooks);
};
