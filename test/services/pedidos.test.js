const assert = require('assert');
const app = require('../../src/app');

describe('\'pedidos\' service', () => {
  it('registered the service', () => {
    const service = app.service('pedidos');

    assert.ok(service, 'Registered the service');
  });
});
