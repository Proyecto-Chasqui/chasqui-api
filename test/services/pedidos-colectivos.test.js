const assert = require('assert');
const app = require('../../src/app');

describe('\'pedidos-colectivos\' service', () => {
  it('registered the service', () => {
    const service = app.service('pedidos-colectivos');

    assert.ok(service, 'Registered the service');
  });
});
