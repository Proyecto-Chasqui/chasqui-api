const assert = require('assert');
const app = require('../../src/app');

describe('\'direcciones\' service', () => {
  it('registered the service', () => {
    const service = app.service('direcciones');

    assert.ok(service, 'Registered the service');
  });
});
