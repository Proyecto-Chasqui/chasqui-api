const { authenticate } = require('@feathersjs/authentication').hooks;
const { likeRegex } = require("../../hooks/misc.utils.js");
const pedidoColectivoPopulate = require('../../hooks/pedido-colectivo-populate');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [likeRegex, pedidoColectivoPopulate()],
    get: [pedidoColectivoPopulate()],
    create: [],
    update: [],
    patch: [],
    remove: []
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
