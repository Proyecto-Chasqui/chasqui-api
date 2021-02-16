const assert = require('assert');
const app = require('../../src/app');

describe('\'vendedor-retiro-zonas\' service', () => {
  it('registered the service', () => {
    const service = app.service('vendedor-retiro-zonas');

    assert.ok(service, 'Registered the service');
  });
});
