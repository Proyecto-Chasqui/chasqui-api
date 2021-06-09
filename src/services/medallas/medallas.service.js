// Initializes the `medallas` service on path `/medallas`
const { Medallas } = require('./medallas.class');
const createModel = require('../../models/medallas.model');
const hooks = require('./medallas.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/medallas', new Medallas(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('medallas');

  service.hooks(hooks);
};
