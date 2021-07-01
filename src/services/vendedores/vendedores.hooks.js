const { likeRegex } = require('../../hooks/misc.utils.js');
const vendedores = require('../../hooks/vendedores');
const vendedorPortada = require('../../hooks/vendedor-portada');
const { disallow } = require('feathers-hooks-common');


module.exports = {
  before: {
    all: [],
    find: [likeRegex, vendedores(), vendedorPortada()],
    get: [],
    create: [disallow()],
    update: [disallow()],
    patch: [disallow()],
    remove: [disallow()]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
