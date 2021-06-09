// Initializes the `USUARIO` service on path `/USUARIO`
const { Usuario } = require('./usuario.class');
const createModel = require('../../models/usuario.model');
const hooks = require('./usuario.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/USUARIO', new Usuario(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('USUARIO');

  service.hooks(hooks);
};
