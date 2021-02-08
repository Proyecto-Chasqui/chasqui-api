const assert = require('assert');
const app = require('../../src/app');

describe('\'nodos\' service', () => {
  it('registered the service', () => {
    const service = app.service('nodos');

    assert.ok(service, 'Registered the service');
  });
});
