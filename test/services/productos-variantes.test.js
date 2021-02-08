const assert = require('assert');
const app = require('../../src/app');

describe('\'productos-variantes\' service', () => {
  it('registered the service', () => {
    const service = app.service('productos-variantes');

    assert.ok(service, 'Registered the service');
  });
});
