const assert = require('assert');
const app = require('../../src/app');

describe('\'medallas\' service', () => {
  it('registered the service', () => {
    const service = app.service('medallas');

    assert.ok(service, 'Registered the service');
  });
});
