// Initializes the `imagenes` service on path `/imagenes`
const { Imagenes } = require('./imagenes.class');
const createModel = require('../../models/imagenes.model');
const hooks = require('./imagenes.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/imagenes', new Imagenes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('imagenes');

  service.hooks(hooks);
};
