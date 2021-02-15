const assert = require('assert');
const app = require('../../src/app');

describe('\'vendedor-tag-producto\' service', () => {
  it('registered the service', () => {
    const service = app.service('vendedor-tag-producto');

    assert.ok(service, 'Registered the service');
  });
});
