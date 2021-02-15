const assert = require('assert');
const app = require('../../src/app');

describe('\'medallas-productores\' service', () => {
  it('registered the service', () => {
    const service = app.service('medallas-productores');

    assert.ok(service, 'Registered the service');
  });
});
