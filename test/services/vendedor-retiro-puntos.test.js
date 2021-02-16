const assert = require('assert');
const app = require('../../src/app');

describe('\'vendedor-retiro-puntos\' service', () => {
  it('registered the service', () => {
    const service = app.service('vendedor-retiro-puntos');

    assert.ok(service, 'Registered the service');
  });
});
