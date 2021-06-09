
const { disallow } = require('feathers-hooks-common')

const productoresPopulate = require('../../hooks/productores-populate');

module.exports = {
  before: {
    all: [],
    find: [productoresPopulate()],
    get: [productoresPopulate()],
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
