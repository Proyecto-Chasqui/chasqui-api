const assert = require('assert');
const app = require('../../src/app');

describe('\'USUARIO\' service', () => {
  it('registered the service', () => {
    const service = app.service('USUARIO');

    assert.ok(service, 'Registered the service');
  });
});
