const { likeRegex } = require("../../hooks/misc.utils.js");
//const { debug } = require('feathers-hooks-common');

module.exports = {
  before: {
    all: [],
    find: [likeRegex],
    get: [],
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
