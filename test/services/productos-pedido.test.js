const assert = require('assert');
const app = require('../../src/app');

describe('\'productos-pedido\' service', () => {
  it('registered the service', () => {
    const service = app.service('productos-pedido');

    assert.ok(service, 'Registered the service');
  });
});
