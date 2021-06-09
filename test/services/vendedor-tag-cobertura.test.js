const assert = require('assert');
const app = require('../../src/app');

describe('\'vendedor-tag-cobertura\' service', () => {
  it('registered the service', () => {
    const service = app.service('vendedor-tag-cobertura');

    assert.ok(service, 'Registered the service');
  });
});
