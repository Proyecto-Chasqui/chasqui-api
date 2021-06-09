const assert = require('assert');
const app = require('../../src/app');

describe('\'vendedor-tag-organizacion\' service', () => {
  it('registered the service', () => {
    const service = app.service('vendedor-tag-organizacion');

    assert.ok(service, 'Registered the service');
  });
});
