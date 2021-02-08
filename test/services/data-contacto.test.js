const assert = require('assert');
const app = require('../../src/app');

describe('\'data-contacto\' service', () => {
  it('registered the service', () => {
    const service = app.service('data-contacto');

    assert.ok(service, 'Registered the service');
  });
});
