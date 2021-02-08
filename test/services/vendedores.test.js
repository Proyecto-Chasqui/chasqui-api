const assert = require('assert');
const app = require('../../src/app');

describe('\'vendedores\' service', () => {
  it('registered the service', () => {
    const service = app.service('vendedores');

    assert.ok(service, 'Registered the service');
  });
});
