const assert = require('assert');
const app = require('../../src/app');

describe('\'productores\' service', () => {
  it('registered the service', () => {
    const service = app.service('productores');

    assert.ok(service, 'Registered the service');
  });
});
