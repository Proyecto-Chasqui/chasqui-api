const assert = require('assert');
const app = require('../../src/app');

describe('\'vendedor-estrategia\' service', () => {
  it('registered the service', () => {
    const service = app.service('vendedor-estrategia');

    assert.ok(service, 'Registered the service');
  });
});
