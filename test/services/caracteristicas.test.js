const assert = require('assert');
const app = require('../../src/app');

describe('\'caracteristicas\' service', () => {
  it('registered the service', () => {
    const service = app.service('caracteristicas');

    assert.ok(service, 'Registered the service');
  });
});
