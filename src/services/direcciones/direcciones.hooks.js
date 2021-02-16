const { likeRegex } = require("../../hooks/misc.utils.js");
const { disallow } = require('feathers-hooks-common')
const { authenticate } = require('@feathersjs/authentication').hooks;

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [likeRegex],
    get: [],
    create: [],
    update: [],
    patch: [],
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