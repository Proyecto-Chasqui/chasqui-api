const { authenticate } = require('@feathersjs/authentication').hooks;
const { likeRegex } = require("../../hooks/misc.utils.js");
const pedidoColectivoPopulate = require('../../hooks/pedido-colectivo-populate');
const { disallow } = require('feathers-hooks-common')

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [likeRegex, pedidoColectivoPopulate()],
    get: [pedidoColectivoPopulate()],
    create: [disallow],
    update: [disallow],
    patch: [disallow],
    remove: [disallow]
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
